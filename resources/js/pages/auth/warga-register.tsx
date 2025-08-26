import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, UserPlus } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type WargaRegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function WargaRegister() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<WargaRegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('warga.register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="🎯 Daftar Akun Baru" description="Bergabunglah dengan platform pengaduan digital untuk warga yang lebih baik">
            <Head title="Daftar Warga" />
            
            <div className="mb-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-muted-foreground">
                    Daftar gratis untuk mengakses layanan pengaduan dan informasi warga
                </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Masukkan nama lengkap"
                            className="h-12 text-base"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Alamat Email</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                            className="h-12 text-base"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Kata Sandi</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Minimal 8 karakter"
                            className="h-12 text-base"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Konfirmasi Kata Sandi</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Ulangi kata sandi"
                            className="h-12 text-base"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button 
                        type="submit" 
                        className="mt-2 w-full h-12 text-base bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-200" 
                        tabIndex={5} 
                        disabled={processing}
                    >
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                        ✨ Daftar Sekarang
                    </Button>
                </div>

                <div className="text-center text-base text-muted-foreground">
                    Sudah punya akun?{' '}
                    <TextLink href={route('warga.login')} tabIndex={6} className="font-medium text-blue-600 hover:text-blue-800">
                        Masuk di sini
                    </TextLink>
                </div>

                <div className="text-xs text-center text-muted-foreground bg-gray-50 p-3 rounded-lg">
                    <p>
                        🔒 Data Anda aman dan terlindungi. Dengan mendaftar, Anda menyetujui{' '}
                        <a href="#" className="text-blue-600 hover:underline">Syarat & Ketentuan</a> kami.
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
}