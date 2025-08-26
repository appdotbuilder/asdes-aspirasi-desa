import React from 'react';
import { Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Complaint {
    id: number;
    title: string;
    location: string;
    category: string;
    status: string;
    created_at: string;
}

interface Stats {
    total: number;
    pending: number;
    in_progress: number;
    resolved: number;
}

interface Props {
    complaints: {
        data: Complaint[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    stats: Stats;
    [key: string]: unknown;
}

export default function ComplaintsIndex({ complaints, stats }: Props) {
    const getStatusColor = (status: string) => {
        const colors = {
            pending: 'bg-yellow-100 text-yellow-800',
            in_progress: 'bg-blue-100 text-blue-800',
            resolved: 'bg-green-100 text-green-800',
            rejected: 'bg-red-100 text-red-800',
        };
        return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
    };

    const getStatusText = (status: string) => {
        const texts = {
            pending: 'Menunggu',
            in_progress: 'Sedang Ditangani',
            resolved: 'Selesai',
            rejected: 'Ditolak',
        };
        return texts[status as keyof typeof texts] || status;
    };

    const getCategoryIcon = (category: string) => {
        const icons = {
            road: '🛣️',
            water: '💧',
            electricity: '⚡',
            bridge: '🌉',
            drainage: '🚰',
            public_facility: '🏛️',
            other: '📋',
        };
        return icons[category as keyof typeof icons] || '📋';
    };

    const getCategoryText = (category: string) => {
        const texts = {
            road: 'Jalan',
            water: 'Air Bersih',
            electricity: 'Listrik',
            bridge: 'Jembatan',
            drainage: 'Drainase',
            public_facility: 'Fasilitas Umum',
            other: 'Lainnya',
        };
        return texts[category as keyof typeof texts] || category;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">A</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-900">Asdes</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href={route('complaints.create')}>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                                    📝 Buat Laporan
                                </Button>
                            </Link>
                            <Link href={route('help')}>
                                <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                                    🆘 Bantuan
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        📋 Daftar Laporan Infrastruktur
                    </h1>
                    <p className="text-lg text-gray-600">
                        Pantau semua laporan infrastruktur desa dan statusnya
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">Total Laporan</p>
                                    <p className="text-4xl font-bold text-gray-900">{stats.total}</p>
                                </div>
                                <div className="text-5xl animate-bounce">📊</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">Menunggu</p>
                                    <p className="text-4xl font-bold text-yellow-600">{stats.pending}</p>
                                </div>
                                <div className="text-5xl animate-pulse">⏳</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">Ditangani</p>
                                    <p className="text-4xl font-bold text-blue-600">{stats.in_progress}</p>
                                </div>
                                <div className="text-5xl animate-spin" style={{animationDuration: '2s'}}>🔧</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-green-50 to-green-100">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">Selesai</p>
                                    <p className="text-4xl font-bold text-green-600">{stats.resolved}</p>
                                </div>
                                <div className="text-5xl animate-bounce">✅</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Complaints List */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Semua Laporan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {complaints.data.length > 0 ? (
                            <div className="space-y-4">
                                {complaints.data.map((complaint) => (
                                    <div
                                        key={complaint.id}
                                        className="border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-102 bg-white border-gray-200 hover:border-blue-300"
                                        onClick={() => router.get(route('complaints.show', complaint.id))}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <span className="text-2xl">
                                                        {getCategoryIcon(complaint.category)}
                                                    </span>
                                                    <Badge variant="outline" className="text-sm px-3 py-1 font-semibold">
                                                        {getCategoryText(complaint.category)}
                                                    </Badge>
                                                    <Badge className={`text-sm px-3 py-1 font-semibold ${getStatusColor(complaint.status)}`}>
                                                        {getStatusText(complaint.status)}
                                                    </Badge>
                                                </div>
                                                
                                                <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight">
                                                    {complaint.title}
                                                </h3>
                                                
                                                <p className="text-lg text-gray-600 mb-3 flex items-center">
                                                    <span className="text-xl mr-2">📍</span> {complaint.location}
                                                </p>
                                                
                                                <p className="text-sm text-gray-500 flex items-center">
                                                    <span className="text-base mr-2">📅</span> {formatDate(complaint.created_at)}
                                                </p>
                                            </div>
                                            
                                            <div className="text-gray-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📋</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    Belum Ada Laporan
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Belum ada laporan infrastruktur yang masuk
                                </p>
                                <Link href={route('complaints.create')}>
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                        📝 Buat Laporan Pertama
                                    </Button>
                                </Link>
                            </div>
                        )}

                        {/* Pagination */}
                        {complaints.data.length > 0 && complaints.links && (
                            <div className="flex justify-center mt-8">
                                <div className="flex space-x-1">
                                    {complaints.links.map((link, index: number) => (
                                        <Button
                                            key={index}
                                            variant={link.active ? 'default' : 'outline'}
                                            size="sm"
                                            onClick={() => link.url && router.get(link.url)}
                                            disabled={!link.url}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}