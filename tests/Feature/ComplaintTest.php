<?php

namespace Tests\Feature;

use App\Models\Complaint;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ComplaintTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_can_view_complaints_index(): void
    {
        Complaint::factory(5)->create();

        $response = $this->get('/complaints');

        $response->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('complaints/index')
                ->has('complaints.data', 5)
                ->has('stats')
            );
    }

    public function test_public_can_view_complaint_create_form(): void
    {
        $response = $this->get('/complaints/create');

        $response->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('complaints/create')
            );
    }

    public function test_public_can_create_complaint(): void
    {
        $complaintData = [
            'title' => 'Jalan berlubang di RT 01',
            'description' => 'Jalan di RT 01 banyak lubang dan berbahaya untuk dilalui.',
            'location' => 'RT 01, RW 02, Desa Sukamaju',
            'category' => 'road',
            'priority' => 'high',
            'reporter_name' => 'John Doe',
            'reporter_email' => 'john@example.com',
            'reporter_phone' => '08123456789',
        ];

        $response = $this->post('/complaints', $complaintData);

        $response->assertRedirect();
        $this->assertDatabaseHas('complaints', $complaintData);
    }

    public function test_complaint_creation_requires_valid_data(): void
    {
        $response = $this->post('/complaints', [
            'title' => '',
            'description' => 'short',
            'location' => '',
            'category' => 'invalid',
            'priority' => 'invalid',
            'reporter_name' => '',
            'reporter_email' => 'invalid-email',
        ]);

        $response->assertSessionHasErrors([
            'title',
            'description',
            'location',
            'category',
            'priority',
            'reporter_name',
            'reporter_email',
        ]);
    }

    public function test_public_can_view_specific_complaint(): void
    {
        $complaint = Complaint::factory()->create();

        $response = $this->get("/complaints/{$complaint->id}");

        $response->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('complaints/show')
                ->where('complaint.id', $complaint->id)
                ->where('complaint.title', $complaint->title)
            );
    }

    public function test_authenticated_user_can_access_dashboard(): void
    {
        $user = User::factory()->create();
        Complaint::factory(3)->create();

        $response = $this->actingAs($user)->get('/dashboard');

        $response->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('dashboard')
                ->has('complaints.data')
                ->has('stats')
                ->has('categoryStats')
            );
    }

    public function test_authenticated_user_can_edit_complaint(): void
    {
        $user = User::factory()->create();
        $complaint = Complaint::factory()->create(['status' => 'pending']);

        $response = $this->actingAs($user)->get("/complaints/{$complaint->id}/edit");

        $response->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('complaints/edit')
                ->where('complaint.id', $complaint->id)
            );
    }

    public function test_authenticated_user_can_update_complaint_status(): void
    {
        $user = User::factory()->create();
        $complaint = Complaint::factory()->create(['status' => 'pending']);

        $updateData = [
            'status' => 'in_progress',
            'priority' => 'high',
            'admin_notes' => 'Sedang dalam penanganan oleh tim teknis.',
        ];

        $response = $this->actingAs($user)
            ->put("/complaints/{$complaint->id}", $updateData);

        $response->assertRedirect('/dashboard');
        $this->assertDatabaseHas('complaints', [
            'id' => $complaint->id,
            'status' => 'in_progress',
            'priority' => 'high',
            'admin_notes' => 'Sedang dalam penanganan oleh tim teknis.',
        ]);
    }

    public function test_resolving_complaint_sets_resolved_at_timestamp(): void
    {
        $user = User::factory()->create();
        $complaint = Complaint::factory()->create(['status' => 'pending']);

        $this->actingAs($user)
            ->put("/complaints/{$complaint->id}", [
                'status' => 'resolved',
                'priority' => 'medium',
                'admin_notes' => 'Masalah telah diperbaiki.',
            ]);

        $complaint->refresh();
        $this->assertEquals('resolved', $complaint->status);
        $this->assertNotNull($complaint->resolved_at);
    }

    public function test_unauthenticated_user_cannot_edit_complaints(): void
    {
        $complaint = Complaint::factory()->create();

        $response = $this->get("/complaints/{$complaint->id}/edit");

        $response->assertRedirect('/login');
    }

    public function test_unauthenticated_user_cannot_update_complaints(): void
    {
        $complaint = Complaint::factory()->create();

        $response = $this->put("/complaints/{$complaint->id}", [
            'status' => 'resolved',
            'priority' => 'low',
            'admin_notes' => 'Test note',
        ]);

        $response->assertRedirect('/login');
    }
}