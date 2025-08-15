"use client";
import React from "react";
import Link from 'next/link';

export default function ServiceDetailsSection() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-avenir font-bold text-gray-900 mb-4">
            Technology Solutions That <span className="text-[#202b5e]">Drive Real Results</span>
          </h1>
          <p className="text-lg md:text-xl font-freight text-gray-600 mb-8">
            Don’t just take our word for it. Our proven track record speaks volumes: <b>98% client retention rate, 40% average cost savings, and 300% ROI increase</b> for businesses that partner with us.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[200px]">
              <div className="text-3xl font-avenir font-bold text-[#202b5e] mb-2">98%</div>
              <div className="font-freight text-gray-700">Client Retention Rate</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[200px]">
              <div className="text-3xl font-avenir font-bold text-[#202b5e] mb-2">40%</div>
              <div className="font-freight text-gray-700">Average Cost Savings</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1 min-w-[200px]">
              <div className="text-3xl font-avenir font-bold text-[#202b5e] mb-2">300%</div>
              <div className="font-freight text-gray-700">ROI Increase</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-avenir font-bold text-gray-900 mb-2 md:mb-0">
              Services That Deliver Measurable Results
            </h2>
            <div className="flex gap-2">
              <span className="bg-[#e5e7eb] text-[#202b5e] px-3 py-1 rounded-full text-xs font-avenir font-bold">Designed for IT</span>
              <span className="bg-[#e5e7eb] text-[#202b5e] px-3 py-1 rounded-full text-xs font-avenir font-bold">Results</span>
            </div>
          </div>
          <p className="font-freight text-gray-600 mb-8 max-w-3xl">
            Every service comes with concrete benefits, proven results, and our unconditional guarantee. See why industry leaders choose us for their most critical technology initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards (updated data, same structure) */}
            <Link href="/ServiceContentSection/organization-restructure" className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Organization Restructure</h3>
              <p className="font-freight text-gray-700 mb-2">We realign your business structure to improve clarity, accountability, and efficiency. Build a scalable organization with defined roles and lean reporting systems.</p>
            </Link>
            <Link href="/ServiceContentSection/roles-responsibilities" className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Roles & Responsibilities</h3>
              <p className="font-freight text-gray-700 mb-2">We define clear job roles, responsibilities, and ownership across your team. Eliminate confusion, boost accountability, and improve team performance.</p>
            </Link>
            <Link href="/ServiceContentSection/swot-gap-analysis" className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">SWOT & GAP Analysis</h3>
              <p className="font-freight text-gray-700 mb-2">We assess your business strengths, weaknesses, opportunities, and threats while identifying critical performance gaps. This forms the foundation for strategic improvements and focused growth.</p>
            </Link>
            <Link href="/ServiceContentSection/kpi" className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">KPI (Key Performance Indicators)</h3>
              <p className="font-freight text-gray-700 mb-2">We define measurable KPIs aligned with your business goals to track progress, improve accountability, and drive consistent performance across teams.</p>
            </Link>
            <Link href="/ServiceContentSection/sop" className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">SOP (Standard Operating Procedures)</h3>
              <p className="font-freight text-gray-700 mb-2">We create clear, customized SOPs that streamline operations, reduce errors, and ensure consistency—so your business runs smoothly, even without you.</p>
            </Link>
            <Link href="/ServiceContentSection/need-analysis" className="block bg-[#f1f5f9] rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-avenir font-bold text-lg text-[#202b5e] mb-2">Need Analysis</h3>
              <p className="font-freight text-gray-700 mb-2">We deep-dive into your business to identify real challenges, operational gaps, and growth opportunities—setting the stage for effective consulting and lasting results.</p>
            </Link>
          </div>
          <div className="m-3 border-gray-800 border-t">
              <hr/>
          </div>
          <Link href="/ServiceContentSection/growth-consulting" className="relative bg-gradient-to-br from-[#e0e7ff] via-[#f1f5f9] to-[#c7d2fe] rounded-2xl p-5 shadow-2xl border-2 border-[#202b5e] overflow-hidden grid place-items-center min-h-[200px] block">
            <div className="grid gap-6 justify-items-center w-full max-w-2xl mx-auto">
              <span className="bg-[#202b5e] text-white px-6 py-2 rounded-full text-lg md:text-xl font-bold shadow-lg border-2 border-white">Exclusive</span>
              <h3 className="font-avenir font-bold text-2xl md:text-3xl text-[#202b5e] tracking-wide drop-shadow-lg text-center">Growth Consulting</h3>
              <p className="font-freight text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                We design actionable strategies to accelerate business growth, streamline operations, and unlock your organization's full potential—backed by data, systems, and structured execution.
              </p>
            </div>
          </Link>
        </div>

        {/* Proven Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-avenir font-bold text-gray-900 mb-8 text-center">Our Proven Process</h2>
          <p className="font-freight text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Transparent, predictable, and designed for success. Our structured approach ensures your project is delivered on time, within budget, and exceeding expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-2xl font-avenir font-bold text-[#202b5e] mb-2">01</div>
              <h4 className="font-avenir font-bold text-lg mb-2">Foundation & Control</h4>
              <p className="font-freight text-gray-700 mb-2">Need Analysis, SWOT & GAP Analysis, Business Restructuring, Roles & Responsibilities, KPI Design, SOP Planning, Checklist & Trackers</p>
              <div className="font-freight text-xs text-gray-500">Weeks 1-7</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-2xl font-avenir font-bold text-[#202b5e] mb-2">02</div>
              <h4 className="font-avenir font-bold text-lg mb-2">Growth Discovery</h4>
              <p className="font-freight text-gray-700 mb-2">Growth Discovery, Customer Journey Mapping</p>
              <div className="font-freight text-xs text-gray-500">Weeks 8-10</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-2xl font-avenir font-bold text-[#202b5e] mb-2">03</div>
              <h4 className="font-avenir font-bold text-lg mb-2">Pricing & Benchmarking</h4>
              <p className="font-freight text-gray-700 mb-2">Pricing Review, Competitive Benchmarking</p>
              <div className="font-freight text-xs text-gray-500">Weeks 11-12</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-2xl font-avenir font-bold text-[#202b5e] mb-2">04</div>
              <h4 className="font-avenir font-bold text-lg mb-2">Sales & Campaign</h4>
              <p className="font-freight text-gray-700 mb-2">Sales Plan, Local Campaign Blueprint</p>
              <div className="font-freight text-xs text-gray-500">Weeks 13-14</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-2xl font-avenir font-bold text-[#202b5e] mb-2">05</div>
              <h4 className="font-avenir font-bold text-lg mb-2">Expansion Planning</h4>
              <p className="font-freight text-gray-700 mb-2">Expansion Options, Feasibility Analysis</p>
              <div className="font-freight text-xs text-gray-500">Weeks 15-16</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-2xl font-avenir font-bold text-[#202b5e] mb-2">06</div>
              <h4 className="font-avenir font-bold text-lg mb-2">Team & Strategy Alignment</h4>
              <p className="font-freight text-gray-700 mb-2">Team Structure, Growth KPIs, Strategic Dashboard, Final Roadmap</p>
              <div className="font-freight text-xs text-gray-500">Weeks 17-20</div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-avenir font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="font-freight text-gray-700 mb-6 max-w-xl mx-auto">
            Schedule a consultation and discover how we can transform your business with our proven process and guaranteed results.
          </p>
          <button className="bg-[#202b5e] text-white font-avenir font-bold py-4 px-8 rounded-lg hover:bg-[#3a4587] transition-colors">
            Schedule a Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
