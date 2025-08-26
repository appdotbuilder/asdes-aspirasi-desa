import React from 'react';
import { AppShell } from '@/components/app-shell';
import { type BreadcrumbItem } from '@/types';

interface Props {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children }: Props) {
    return (
        <AppShell variant="sidebar">
            {children}
        </AppShell>
    );
}