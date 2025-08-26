import React from 'react';
import { Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


interface Props {
    auth?: {
        user?: {
            id: number;
            name: string;
            email: string;
        };
    };
    [key: string]: unknown;
}

export default function Welcome({ auth }: Props) {
    const handleCreateComplaint = () => {
        router.get(route('complaints.create'));
    };

    const handleViewComplaints = () => {
        router.get(route('complaints.index'));
    };

    const features = [
        {
            icon: '📋',
            title: 'Lapor Mudah',
            description: 'Laporkan masalah infrastruktur desa dengan mudah melalui form online yang sederhana'
        },
        {
            icon: '👁️',
            title: 'Transparansi Penuh',
            description: 'Pantau status dan progress penanganan laporan Anda secara real-time'
        },
        {
            icon: '📊',
            title: 'Dashboard Admin',
            description: 'Pemerintah desa dapat mengelola dan melacak semua laporan dengan mudah'
        },
        {
            icon: '🎯',
            title: 'Prioritas Berbasis Data',
            description: 'Identifikasi masalah umum dan tentukan prioritas pembangunan berdasarkan data real'
        }
    ];

    const categories = [
        { name: 'Jalan', icon: '🛣️', color: 'bg-blue-500' },
        { name: 'Air Bersih', icon: '💧', color: 'bg-cyan-500' },
        { name: 'Listrik', icon: '⚡', color: 'bg-yellow-500' },
        { name: 'Jembatan', icon: '🌉', color: 'bg-purple-500' },
        { name: 'Drainase', icon: '🚰', color: 'bg-green-500' },
        { name: 'Fasilitas Umum', icon: '🏛️', color: 'bg-red-500' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Asdes</h1>
                                <p className="text-sm text-gray-500">Aspirasi Desa</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            {auth?.user ? (
                                <>
                                    <Link href={route('dashboard')}>
                                        <Button size="lg" className="px-8 py-3 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                                            📊 Dashboard
                                        </Button>
                                    </Link>
                                    <Link href={route('help')}>
                                        <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                                            🆘 Bantuan
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href={route('login')}>
                                        <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold rounded-xl border-2 hover:scale-105 transition-all duration-300">
                                            🔑 Masuk
                                        </Button>
                                    </Link>
                                    <Link href={route('register')}>
                                        <Button size="lg" className="px-8 py-3 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                                            👥 Daftar
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            🏘️ <span className="text-blue-600">Asdes</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-4">
                            Platform Aspirasi dan Pelaporan Infrastruktur Desa
                        </p>
                        <p className="text-lg text-gray-500 mb-8">
                            Laporkan masalah infrastruktur desa dengan mudah dan pantau progress penanganannya. 
                            Bantu pemerintah desa dalam meningkatkan kualitas infrastruktur dan pelayanan publik.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <Button 
                                size="lg" 
                                onClick={handleCreateComplaint}
                                className="bg-blue-600 hover:bg-blue-700 text-xl px-12 py-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[60px]"
                            >
                                📝 Buat Laporan Sekarang
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                onClick={handleViewComplaints}
                                className="text-xl px-12 py-6 rounded-2xl font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 min-h-[60px]"
                            >
                                📋 Lihat Semua Laporan
                            </Button>
                        </div>
                    </div>
                    
                    {/* Educational Illustration */}
                    <div className="order-1 lg:order-2">
                        <div className="illustration-placeholder">
                            <div className="illustration-content">
                                <div className="text-8xl mb-6 animate-gentle-pulse">🏛️</div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center space-x-4 text-4xl">
                                        <span className="animate-bounce" style={{animationDelay: '0s'}}>👥</span>
                                        <span className="text-2xl text-gray-600">→</span>
                                        <span className="animate-bounce" style={{animationDelay: '0.2s'}}>📱</span>
                                        <span className="text-2xl text-gray-600">→</span>
                                        <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🏗️</span>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-700">
                                        Warga → Laporan → Tindak Lanjut
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Fitur Utama
                    </h2>
                    <p className="text-xl text-gray-600">
                        Solusi lengkap untuk pelaporan dan pengelolaan infrastruktur desa
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <div className="text-6xl mb-4 animate-bounce" style={{animationDelay: `${index * 200}ms`}}>{feature.icon}</div>
                                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-lg leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Kategori Infrastruktur
                        </h2>
                        <p className="text-xl text-gray-600">
                            Jenis infrastruktur yang dapat dilaporkan
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-0">
                                <div className="text-5xl mb-4 animate-pulse" style={{animationDelay: `${index * 150}ms`}}>{category.icon}</div>
                                <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Siap Melaporkan Masalah Infrastruktur? 🚀
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Bergabunglah dengan warga lainnya dalam membangun desa yang lebih baik
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button 
                            size="lg" 
                            onClick={handleCreateComplaint}
                            className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-6 rounded-2xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[64px]"
                        >
                            📝 Buat Laporan Sekarang
                        </Button>
                        {!auth?.user && (
                            <Link href={route('register')}>
                                <Button 
                                    size="lg" 
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-6 rounded-2xl font-bold hover:scale-105 transition-all duration-300 min-h-[64px]"
                                >
                                    👥 Daftar sebagai Admin
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">A</span>
                            </div>
                            <span className="text-xl font-bold">Asdes - Aspirasi Desa</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Platform digital untuk meningkatkan partisipasi masyarakat dalam pembangunan desa
                        </p>
                        <p className="text-gray-500 text-sm">
                            © 2024 Asdes. Membangun desa bersama teknologi. 🏘️✨
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}