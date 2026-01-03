document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // Simulate load (replace later with real logic)
  setTimeout(() => {
    root.innerHTML = `
      <header class="w-full bg-white border-b sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-blue-600">ResumeAI</h1>
          <nav class="space-x-4 text-sm">
            <a href="#" class="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Templates</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main class="flex-1">
        <section class="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 class="text-4xl font-extrabold mb-4">
              Build an ATS-Optimized Resume with AI
            </h2>
            <p class="text-gray-600 mb-6">
              Create professional resumes in minutes. Optimized for recruiters and applicant tracking systems.
            </p>
            <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Create Resume Free
            </button>
          </div>

          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="font-semibold mb-3">Why ResumeAI?</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>✔ AI-generated bullet points</li>
              <li>✔ ATS-friendly templates</li>
              <li>✔ No signup required</li>
              <li>✔ 100% free</li>
            </ul>
          </div>
        </section>

        <section class="bg-gray-100 py-16">
          <div class="max-w-6xl mx-auto px-4 text-center">
            <h3 class="text-3xl font-bold mb-6">How It Works</h3>
            <div class="grid md:grid-cols-3 gap-6 text-sm">
              <div class="bg-white p-6 rounded-lg shadow">Enter your details</div>
              <div class="bg-white p-6 rounded-lg shadow">AI generates resume</div>
              <div class="bg-white p-6 rounded-lg shadow">Download & apply</div>
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-white border-t py-6 text-center text-sm text-gray-500">
        © ${new Date().getFullYear()} ResumeAI. All rights reserved.
      </footer>
    `;
  }, 800);
});
