import type { FC } from 'react'
import './Blog.css'

const Blog: FC = () => {
  const blogPosts = [
    // Country/region articles first
    {
      id: 7,
      title: 'USA: FDA – AI in Drug & Biologics Lifecycle (2025–2026)',
      excerpt: 'Overview of the FDA’s 2025 draft framework for using AI to support regulatory decision-making for drugs and biologics, including risk-based model credibility, lifecycle maintenance, and transparency expectations.',
      author: 'Regulatory Intelligence Team',
      date: 'January 2026',
      category: 'Global AI Regulation',
      readTime: '8 min read',
      links: [
        {
          label: 'FDA – Considerations for the Use of Artificial Intelligence to Support Regulatory Decision-Making for Drug and Biological Products (Draft, Jan 2025)',
          url: 'https://www.fda.gov/news-events/press-announcements/fda-proposes-framework-advance-credibility-ai-models-used-drug-and-biological-product-submissions?utm_source=openai'
        },
        {
          label: 'FDA – Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing (Draft)',
          url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/artificial-intelligence-enabled-device-software-functions-lifecycle-management-and-marketing?utm_source=openai'
        },
        {
          label: 'DLA Piper – Legal analysis of FDA AI draft guidance',
          url: 'https://www.dlapiper.com/en/insights/publications/2025/01/fda-releases-draft-guidance-on-use-of-ai?utm_source=openai'
        }
      ]
    },
    {
      id: 8,
      title: 'EU: EMA – Guiding Principles of Good AI Practice',
      excerpt: 'Summary of EMA’s AI workplan, reflection paper on AI in the medicinal product lifecycle, and the joint EMA–FDA guiding principles for good AI practice across medicine development.',
      author: 'Regulatory Intelligence Team',
      date: 'January 2026',
      category: 'Global AI Regulation',
      readTime: '7 min read',
      links: [
        {
          label: 'EMA – Reflection paper on the use of artificial intelligence in the lifecycle of medicines',
          url: 'https://www.ema.europa.eu/en/use-artificial-intelligence-ai-medicinal-product-lifecycle-scientific-guideline?utm_source=openai'
        },
        {
          label: 'EMA – EMA and FDA set common principles for AI in medicine development (Jan 2026)',
          url: 'https://www.ema.europa.eu/en/news/ema-fda-set-common-principles-ai-medicine-development-0?utm_source=openai'
        },
        {
          label: 'EMA – Artificial intelligence workplan to guide use of AI in medicines regulation',
          url: 'https://www.ema.europa.eu/en/news/artificial-intelligence-workplan-guide-use-ai-medicines-regulation?utm_source=openai'
        }
      ]
    },
    {
      id: 9,
      title: 'Japan: PMDA – Action Plan for the Use of AI in Operations',
      excerpt: 'How PMDA’s 2025 Action Plan and AI Action Working Group are laying the foundation for AI-supported regulatory operations, from administrative efficiency to future review and safety applications.',
      author: 'Regulatory Intelligence Team',
      date: 'October 2025',
      category: 'Global AI Regulation',
      readTime: '6 min read',
      links: [
        {
          label: 'PMDA – Action Plan for the Use of AI in Operations (Oct 10, 2025)',
          url: 'https://www.pmda.go.jp/english/about-pmda/0023.html?utm_source=openai'
        },
        {
          label: 'PMDA – AI Action Working Group (AI Action WG) overview',
          url: 'https://www.pmda.go.jp/english/rs-sb-std/rs/0030.html?utm_source=openai'
        },
        {
          label: 'Article – PMDA plans for general-purpose AI and regulatory science',
          url: 'https://pj.jiho.jp/article/254350?utm_source=openai'
        }
      ]
    },
    {
      id: 10,
      title: 'India: CDSCO – Software & AI Guidance for Medical Devices',
      excerpt: 'Snapshot of India’s evolving approach to medical device software and AI/ML-based tools, focusing on draft guidance for SaMD and the broader digitization of labs and regulatory infrastructure.',
      author: 'Regulatory Intelligence Team',
      date: 'October 2025',
      category: 'Global AI Regulation',
      readTime: '5 min read',
      links: [
        {
          label: 'CDSCO – Draft guidance on medical device software and AI/ML device evaluation (Oct 2025)',
          url: 'https://health.economictimes.indiatimes.com/news/medical-devices/cdsco-issues-updated-guidance-on-medical-device-software-lobby-calls-for-clarity-on-ai-ml-device-evaluation-protocols/124737287?utm_source=openai'
        },
        {
          label: 'Article – India’s pharma revolution: AI-driven labs and digital infrastructure',
          url: 'https://pharma.economictimes.indiatimes.com/news/policy-and-regulations/indias-pharma-revolution-from-car-t-approvals-to-ai-driven-labs/122813065?utm_source=openai'
        }
      ]
    },
    {
      id: 11,
      title: 'China: NMPA – Reforming Regulation for the Digital-Intelligence Era',
      excerpt: 'Overview of China’s recent reforms to accelerate innovative drug and device development, including faster clinical trial review timelines and support for advanced technologies such as AI.',
      author: 'Regulatory Intelligence Team',
      date: 'October 2025',
      category: 'Global AI Regulation',
      readTime: '5 min read',
      links: [
        {
          label: 'NMPA – Optimizing review and approval process for clinical trials of innovative drugs (2025 No. 86)',
          url: 'https://english.nmpa.gov.cn/2025-10/14/c_1132769.htm?utm_source=openai'
        },
        {
          label: 'State Council – Opinions on comprehensively deepening reform of drug and device regulation',
          url: 'https://english.nmpa.gov.cn/2025-03/25/c_1080969.htm?utm_source=openai'
        }
      ]
    },
    {
      id: 12,
      title: 'South Korea: MFDS – Digital Medical Products & AI in Health',
      excerpt: 'Highlights from Korea’s Digital Medical Products Act and international AI-in-health collaborations, focusing on risk-based regulation of AI-powered medical technologies.',
      author: 'Regulatory Intelligence Team',
      date: 'January 2025',
      category: 'Global AI Regulation',
      readTime: '5 min read',
      links: [
        {
          label: 'Digital Medical Products Act (effective Jan 2025) – overview',
          url: 'https://www.hst.org.tw/en/story/content/5528?utm_source=openai'
        },
        {
          label: 'WHO / AIRIS 2025 – Collaborative recommendations on AI in health (Incheon, Oct 2025)',
          url: 'https://www.who.int/news/item/24-10-2025-countries--regulators-and-partners-urge-a-collaborative-approach-to-advance-safe-and-equitable-ai-in-health?utm_source=openai'
        }
      ]
    },
    {
      id: 13,
      title: 'Middle East: SFDA (Saudi Arabia) – AI for Supply Chain & Safety Oversight',
      excerpt: 'How the Saudi Food and Drug Authority is applying AI to predict drug shortages, strengthen pharmacovigilance, and align with international best practices for AI in medical devices and digital health.',
      author: 'Regulatory Intelligence Team',
      date: 'October 2025',
      category: 'Global AI Regulation',
      readTime: '6 min read',
      links: [
        {
          label: 'SFDA – AI model to predict drug shortages (Oct 2025)',
          url: 'https://www.arabnews.com/node/2620848/saudi-arabia?utm_source=openai'
        },
        {
          label: 'Article – Saudi Arabia uses AI for drug safety oversight and digital pharmacovigilance',
          url: 'https://www.arabnews.com/node/2626369/saudi-arabia?utm_source=openai'
        },
        {
          label: 'SFDA–AAMI partnership on medical device and AI best practices',
          url: 'https://aami.org/news/saudi-arabian-authority-sfda-partners-with-aami-for-medical-device-and-ai-best-practices/?utm_source=openai'
        }
      ]
    },
    // Original articles after the country set
    {
      id: 1,
      title: 'The Future of GMP Compliance: AI-Powered Quality Management',
      excerpt: 'Explore how artificial intelligence is revolutionizing Good Manufacturing Practice compliance, enabling organizations to achieve unprecedented levels of quality assurance and regulatory readiness.',
      author: 'Industry Iceberg Team',
      date: 'March 15, 2024',
      category: 'GMP Compliance',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Best Practices for FDA 483 Observation Management',
      excerpt: 'Learn effective strategies for managing FDA 483 observations, from initial response to implementing corrective actions that prevent recurrence and strengthen your quality systems.',
      author: 'Quality Assurance Experts',
      date: 'March 10, 2024',
      category: 'Regulatory Affairs',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Digital Transformation in Life Sciences: A Roadmap to Success',
      excerpt: 'Discover how life sciences companies are leveraging digital transformation to streamline operations, improve compliance, and accelerate time-to-market while maintaining the highest quality standards.',
      author: 'Industry Iceberg Team',
      date: 'March 5, 2024',
      category: 'Digital Transformation',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Understanding ALCOA+ Principles in Data Integrity',
      excerpt: 'A comprehensive guide to ALCOA+ principles and how they apply to modern computerized systems, ensuring data integrity and regulatory compliance in pharmaceutical manufacturing.',
      author: 'Data Integrity Specialists',
      date: 'February 28, 2024',
      category: 'Data Integrity',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'AI-Driven Document Automation: Transforming Regulatory Submissions',
      excerpt: 'How AI-powered document drafting platforms are revolutionizing the way life sciences companies create, review, and submit regulatory documents, reducing errors and accelerating approvals.',
      author: 'Industry Iceberg Team',
      date: 'February 20, 2024',
      category: 'AI & Automation',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Building a Culture of Quality: From Compliance to Excellence',
      excerpt: 'Learn how to transform your organization from a compliance-focused mindset to a culture of quality excellence that drives continuous improvement and operational excellence.',
      author: 'Quality Culture Experts',
      date: 'February 15, 2024',
      category: 'Quality Management',
      readTime: '9 min read'
    },
  ]

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Industry Insights & Updates</h1>
          <p className="blog-hero-subtitle">
            Stay informed with the latest trends, best practices, and expert insights 
            in GMP compliance, quality management, and life sciences innovation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-content">
        <div className="blog-container">
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-header">
                  <span className="blog-post-category">{post.category}</span>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                {post.links && (
                  <ul className="blog-post-links">
                    {post.links.map((link) => (
                      <li key={link.url}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="blog-post-footer">
                  <div className="blog-post-author">
                    <span className="blog-author-name">{post.author}</span>
                    <span className="blog-post-date">{post.date}</span>
                  </div>
                  <a href="#" className="blog-read-more">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter and receive the latest insights, 
              industry updates, and best practices delivered to your inbox.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
