<?php

test('registration screen can be rendered', function () {
    $response = $this->get('/warga/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
    $response = $this->post('/warga/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect('/');
});
