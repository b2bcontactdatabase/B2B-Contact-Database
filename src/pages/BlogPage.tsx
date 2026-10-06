import React, { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { Search, BookOpen, Clock, Calendar, ArrowRight, X, CheckCircle2, Share2 } from 'lucide-react';

interface BlogPageProps {
  onRequestSample: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onRequestSample }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    'All',
    'Outbound Strategy',
    'Data Hygiene',
    'ABM & Sales Tech',
    'Compliance & Privacy',
    'Pipeline Benchmarks',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = BLOG_POSTS[0];

  const handleShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. HEADER */}
      <section className="bg-slate-900 text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-md border border-blue-900">
              <BookOpen className="w-3.5 h-3.5" />
              <span>B2B Intelligence & Revenue Engineering Research</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Data-Driven Outbound & Lead Generation Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Actionable insights on email deliverability algorithms, cold outreach compliance, CRM data decay mitigation, and account-based sales execution.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-slate-900 relative">
              <img
                src="/src/assets/images/blog_lead_generation_1791273536891.jpg"
                alt="Executive analyzing enterprise sales intelligence chart"
                className="w-full h-64 lg:h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                {/* Zero-pill metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-blue-600 font-semibold">{featuredPost.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">
                      {featuredPost.author.name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {featuredPost.author.role}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredPost)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEARCH & CATEGORY FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides and benchmarks..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            />
          </div>
        </div>

        {/* 4. ARTICLES GRID */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group"
              onClick={() => setActiveArticle(post)}
            >
              <div className="space-y-3">
                {/* Zero-pill metadata */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="text-blue-600 font-semibold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.publishedDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                    {post.author.avatar}
                  </div>
                  <span className="text-xs font-medium text-slate-800">
                    {post.author.name}
                  </span>
                </div>

                <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="text-blue-600 font-bold">{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.publishedDate}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                    {activeArticle.author.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">
                      {activeArticle.author.name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {activeArticle.author.role}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="my-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                Executive Takeaways:
              </h4>
              <ul className="space-y-1.5">
                {activeArticle.keyTakeaways.map((takeaway, tidx) => (
                  <li key={tidx} className="flex items-start gap-2 text-xs text-blue-950 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Prose Content */}
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {activeArticle.content.map((paragraph, pidx) => (
                <p key={pidx}>{paragraph}</p>
              ))}
            </div>

            {/* Bottom Callout in Article */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl">
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Ready to test this in your outbound campaigns?
                </div>
                <div className="text-[11px] text-slate-500">
                  Receive 25 complimentary verified contacts matching your exact ICP.
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onRequestSample();
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap"
              >
                Get Sample Roster
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
