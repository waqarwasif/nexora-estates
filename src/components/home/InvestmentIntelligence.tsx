"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUpRight, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';

const data = [
  { name: '2020', value: 4000 },
  { name: '2021', value: 5500 },
  { name: '2022', value: 7200 },
  { name: '2023', value: 8500 },
  { name: '2024', value: 11000 },
  { name: '2025', value: 13500 },
];

const roiData = [
  { name: 'Q1', value: 5 },
  { name: 'Q2', value: 8 },
  { name: 'Q3', value: 7.5 },
  { name: 'Q4', value: 11 },
  { name: 'Q1', value: 10.5 },
  { name: 'Q2', value: 14 },
];

export function InvestmentIntelligence() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Market Analytics</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Investment Intelligence</h2>
            <p className="text-muted max-w-xl">
              Proprietary market insights and Bloomberg-grade analytics to guide your real estate acquisitions.
            </p>
          </div>
          <button className="px-6 py-3 bg-primary text-background font-medium rounded-[16px] hover:bg-secondary transition-colors whitespace-nowrap">
            Download Report
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-heading font-bold mb-1">Global Portfolio Growth</h3>
                <p className="text-sm text-muted">AUM in millions (USD)</p>
              </div>
              <div className="flex items-center gap-2 text-success bg-success/10 px-3 py-1 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                +24.5% YOY
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val / 1000}B`} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.02)'}}
                    contentStyle={{ backgroundColor: '#101827', borderColor: 'rgba(255,255,255,0.08)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="value" fill="#C9A86A" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-xl flex-1">
              <h3 className="text-xl font-heading font-bold mb-1">Average ROI</h3>
              <p className="text-sm text-muted mb-6">Across prime markets</p>
              <div className="text-5xl font-heading font-bold text-primary mb-6">12.4%</div>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={roiData}>
                    <Line type="monotone" dataKey="value" stroke="#22C55E" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 shadow-xl">
              <div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center mb-6">
                <PieChartIcon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">Diversification</h3>
              <p className="text-sm text-muted mb-4">
                Our portfolio spans residential, commercial, and ultra-luxury developments to mitigate risk.
              </p>
              <a href="#" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline underline-offset-4">
                View allocation strategy <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
