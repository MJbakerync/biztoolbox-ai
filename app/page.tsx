import Link from "next/link";
import { tools } from "@/lib/tools-config";

const testimonials = [
  { name: "Sarah M.", role: "Founder, Bloom Digital", text: "BizToolbox saved me hours every week. The cold email writer alone has booked me 12 new client calls this month.", rating: 5 },
  { name: "James K.", role: "Marketing Lead, ScaleUp", text: "I replaced three separate AI tools with this one platform. The business plan generator is incredibly detailed.", rating: 5 },
  { name: "Priya R.", role: "HR Manager", text: "The policy generators are a game-changer for small teams. What used to take our lawyer days now takes 30 seconds.", rating: 5 },
  ];

const stats = [
  { number: "2,000+", label: "Businesses" },
  { number: "50", label: "AI Tools" },
  { number: "150K+", label: "Generations" },
  { number: "4.9/5", label: "Rating" },
  ];

export default function Home() {
    return (
          <div>
                <section className="bg-gradient-to-b from-blue-50 to-white py-20">
                        <div className="max-w-4xl mx-auto text-center px-4">
                                  <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-6">Trusted by 2,000+ businesses</div>div>
                                  <h1 className="text-5xl font-bold text-gray-900 mb-6">Free AI Tools for Every Business Need</h1>h1>
                                  <p className="text-xl text-gray-600 mb-8">50 AI-powered generators that help you write better emails, create policies, build business plans, and more.</p>p>
                                  <div className="flex gap-4 justify-center flex-wrap">
                                              <Link href="/tools" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">Browse All Tools</Link>Link>
                                              <Link href="/signin" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:border-gray-400 transition">Create Free Account</Link>Link>
                                  </div>div>
                                  <p className="mt-4 text-sm text-gray-500">3 free uses per day · No credit card required · Upgrade anytime</p>p>
                        </div>div>
                </section>section>
                <section className="bg-white py-12 border-b">
                        <div className="max-w-5xl mx-auto px-4">
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                    {stats.map((s) => (<div key={s.label}><div className="text-3xl font-bold text-blue-600">{s.number}</div>div><div className="text-sm text-gray-600 mt-1">{s.label}</div>div></div>div>))}
                                  </div>div>
                        </div>div>
                </section>section>
                <section className="max-w-7xl mx-auto px-4 py-16">
                        <h2 className="text-3xl font-bold text-center mb-4">Popular Tools</h2>h2>
                        <p className="text-center text-gray-600 mb-12">Start generating professional business content in seconds.</p>p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {tools.slice(0, 9).map((tool) => (
                        <Link key={tool.slug} href={"/tools/" + tool.slug} className="border rounded-xl p-6 hover:shadow-lg transition group">
                                      <div className="text-3xl mb-3">{tool.icon}</div>div>
                                      <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">{tool.name}</h3>h3>
                                      <p className="text-gray-600 text-sm mt-2">{tool.shortDescription}</p>p>
                                      <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tool.category}</span>span>
                        </Link>Link>
                      ))}
                        </div>div>
                        <div className="text-center mt-8"><Link href="/tools" className="text-blue-600 font-medium hover:underline">View all {tools.length} tools →</Link>Link></div>div>
                </section>section>
                <section className="bg-gray-50 py-16">
                        <div className="max-w-6xl mx-auto px-4">
                                  <h2 className="text-3xl font-bold text-center mb-4">Loved by Business Owners</h2>h2>
                                  <p className="text-center text-gray-600 mb-12">See what our users are saying.</p>p>
                                  <div className="grid md:grid-cols-3 gap-8">
                                    {testimonials.map((t) => (
                          <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border">
                                          <div className="flex mb-3">{Array.from({length: t.rating}).map((_, i) => (<span key={i} className="text-yellow-400 text-lg">★</span>span>))}</div>div>
                                          <p className="text-gray-700 mb-4">{t.text}</p>p>
                                          <div><p className="font-semibold text-gray-900 text-sm">{t.name}</p>p><p className="text-gray-500 text-xs">{t.role}</p>p></div>div>
                          </div>div>
                        ))}
                                  </div>div>
                        </div>div>
                </section>section>
                <section className="py-16">
                        <div className="max-w-2xl mx-auto px-4 text-center">
                                  <h2 className="text-3xl font-bold mb-4">Get 5 Free Business Templates</h2>h2>
                                  <p className="text-gray-600 mb-6">Join 2,000+ business owners getting weekly AI tips and free templates.</p>p>
                                  <div className="flex gap-3 max-w-md mx-auto"><input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border rounded-lg" /><button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition whitespace-nowrap">Get Templates</button>button></div>div>
                                  <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>p>
                        </div>div>
                </section>section>
                <section className="bg-blue-600 text-white py-16">
                        <div className="max-w-4xl mx-auto text-center px-4">
                                  <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Business?</h2>h2>
                                  <p className="text-blue-100 text-lg mb-8">Start free. Upgrade to Pro for unlimited access and premium features.</p>p>
                                  <div className="flex gap-4 justify-center flex-wrap">
                                              <Link href="/tools" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition">Get Started Free</Link>Link>
                                              <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">View Pricing</Link>Link>
                                  </div>div>
                        </div>div>
                </section>section>
          </div>div>
        );
}</div>
