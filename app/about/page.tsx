export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
      
      <div className="prose prose-invert max-w-none">
        <div className="mb-12 p-8 bg-white/5 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I&apos;m Mirant Desai, the Founder and CEO of <a href="https://www.planaipro.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">PlanAI</a>,
            an AI-powered enterprise business software platform. PlanAI helps organizations with strategic planning,
            financial modeling, and business intelligence through advanced artificial intelligence and automation.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With a background in technology and entrepreneurship, I&apos;m passionate about building tools that empower
            businesses to make data-driven decisions and unlock their full potential through intelligent automation.
          </p>
        </div>

        <div className="mb-12 p-8 bg-white/5 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">What I&apos;m Building</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At PlanAI, we&apos;re developing a comprehensive suite of AI-powered business tools including:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Multi-LLM AI intelligence for strategic insights</li>
            <li>Business planning and financial modeling tools</li>
            <li>Market research and competitive analysis platforms</li>
            <li>Strategic frameworks and OKR planning</li>
            <li>Project knowledge management and document intelligence</li>
          </ul>
        </div>

        <div className="mb-12 p-8 bg-white/5 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Areas of Interest</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Business Intelligence and Analytics</li>
            <li>Entrepreneurship and Startup Growth</li>
            <li>Product Development and Design</li>
            <li>Strategic Planning and Financial Modeling</li>
          </ul>
        </div>

        <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I&apos;m always interested in connecting with fellow entrepreneurs, developers, and business leaders.
            Feel free to reach out through any of these channels:
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.planaipro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Visit PlanAI
            </a>
            <a 
              href="https://linkedin.com/in/mirantdesai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/mirantdesai23"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
