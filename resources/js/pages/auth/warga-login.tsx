import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type WargaLoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface WargaLoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function WargaLogin({ status, canResetPassword }: WargaLoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<WargaLoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('warga.login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="🏠 Masuk ke Akun Anda" description="Masukkan email dan kata sandi untuk mengakses layanan pengaduan">
            <Head title="Login Warga" />

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Alamat Email</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                            className="h-12 text-base"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Kata Sandi</Label>
                            {canResetPassword && (
                                <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                                    Lupa kata sandi?
                                </TextLink>
                            )}
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Kata sandi"
                            className="h-12 text-base"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onClick={() => setData('remember', !data.remember)}
                            tabIndex={3}
                        />
                        <Label htmlFor="remember" className="text-base">Ingat saya</Label>
                    </div>

                    <Button type="submit" className="mt-4 w-full h-12 text-base bg-blue-600 hover:bg-blue-700" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        🚀 Masuk
                    </Button>
                </div>

                <div className="text-center text-base text-muted-foreground">
                    Belum punya akun?{' '}
                    <TextLink href={route('warga.register')} tabIndex={5} className="font-medium text-blue-600 hover:text-blue-800">
                        Daftar sekarang
                    </TextLink>
                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </AuthLayout>
    );
}