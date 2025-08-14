<template>
  <main class="font-sans bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 shadow-lg">
      <div class="max-w-3xl mx-auto text-center p-4">
        <h1 class="text-5xl font-extrabold mb-4">Hi, I'm Willy Budiman</h1>
        <p class="text-lg text-blue-100">
          Software Engineer | Vue.js | Nuxt.js | React.js | TypeScript | PHP | Ruby on Rails | Node JS
        </p>
        <p class="mt-2">
          📞 {{ phoneNumber }} | ✉ 
          <a :href="`mailto:${email}`" class="underline">{{ email }}</a>
        </p>
        <p class="mt-2">
          <a :href="linkedinUrl" target="_blank" class="underline text-blue-100 hover:text-white">
            LinkedIn Profile
          </a>
        </p>
      </div>
    </header>

    <div class="max-w-3xl mx-auto p-6 space-y-16">
      <!-- Professional Summary -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
          Professional Summary
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Software Engineer with 10+ years of experience in web application development. 
          Specialized in modern frontend frameworks like Vue.js, Nuxt.js, React.js, Tailwind CSS, and TypeScript. 
          Also experienced with backend technologies such as Ruby on Rails and PHP. 
          Adept at collaborating with cross-functional teams and delivering scalable, user-focused features that drive product impact.
        </p>
      </section>

      <!-- Experience -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
          Professional Experience
        </h2>
        <div v-for="job in jobs" :key="job.company" class="bg-white py-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 class="text-xl font-bold">{{ job.title }}</h3>
          <p class="text-gray-600">{{ job.company }} ({{ job.period }})</p>
          <ul class="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li v-for="task in job.tasks" :key="task">{{ task }}</li>
          </ul>
        </div>
      </section>

      <!-- Skills -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
          Technical Skills
        </h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <li v-for="skill in skills" :key="skill" class="bg-white p-4 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
            <span class="font-medium text-gray-700">{{ skill }}</span>
          </li>
        </ul>
      </section>

      <!-- Education -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
          Education
        </h2>
        <p class="text-gray-700">
          {{ educationText }}
        </p>
      </section>

      <!-- Contact -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
          Contact
        </h2>
        <div class="space-y-2">
          <p>Email: <a :href="`mailto:${email}`" target="_blank" class="text-blue-600 hover:underline">{{ email }}</a></p>
          <p>GitHub: <a :href="githubUrl" target="_blank" class="text-blue-600 hover:underline">{{ githubUrl }}</a></p>
          <p>LinkedIn: <a :href="linkedinUrl" target="_blank" class="text-blue-600 hover:underline">{{ linkedinUrl }}</a></p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const skills = [
  'Vue.js', 'Nuxt.js', 'React.js', 'Tailwind CSS', 'TypeScript',
  'JavaScript', 'HTML', 'CSS', 'jQuery', 'Ruby on Rails', 'PHP',
  'CodeIgniter', 'Laravel', 'MySQL', 'PostgreSQL', 'Redis', 'Node.js'
]

const phoneNumber = '+62 896-5504-6133';
const linkedinUrl = 'https://www.linkedin.com/in/willy-budiman-889bb398/';
const email = 'willybudiman23@gmail.com';
const githubUrl = 'https://github.com/willybudiman23';
const educationText = 'Bachelor of Information Technology, STMIK LPKIA, Bandung (October 2007 – October 2011)';
const jobs = [
  {
    title: 'Frontend Engineer',
    company: 'PT. Bukalapak.com',
    period: 'October 2018 – March 2025',
    tasks: [
      'Developed and maintained micro-frontends using Vue.js.',
      'Implemented key features such as aggregator delivery service (BukaSend) and enhancing user engagement.',
      'Integrated backend microservices using Ruby on Rails / PHP / Golang to optimize platform scalability.',
      'Collaborated with cross-functional teams to improve overall system performance and UI/UX.'
    ]
  },
  {
    title: 'Fullstack PHP Developer',
    company: 'PT. Toko Bagus (OLX Indonesia)',
    period: 'July 2016 – September 2018',
    tasks: [
      'Maintained and enhanced desktop/mobile platforms using custom PHP frameworks.',
      'Implemented new features to improve user interactions and site functionality.',
      'Optimized backend processes for faster loading times and better scalability.'
    ]
  },
  {
    title: 'Web Developer',
    company: 'PT. Pilar Timur Teknologi',
    period: 'December 2015 – June 2016',
    tasks: [
      'Led the development of Point of Sales (POS), Inventory, and HR Management modules.',
      'Designed comprehensive reporting and accounting systems to streamline operations.'
    ]
  },
  {
    title: 'Web Developer',
    company: 'PT. Asia Sarana Telekomunika',
    period: 'April 2015 – November 2015',
    tasks: [
      'Built ERP applications for lumber mills using PHP and CodeIgniter.',
      'Developed custom modules to optimize business operations.'
    ]
  },
  {
    title: 'Web Developer',
    company: 'PT. Madani Cipta Informasi',
    period: 'August 2012 – March 2015',
    tasks: [
      'Created Attendance Management System (AMS) and Document Management System (DMS).',
      'Used PHP (CodeIgniter) and MySQL stored procedures for robust system development.'
    ]
  },
  {
    title: 'Web Developer',
    company: 'PT. Informatika Reka Mandiri',
    period: 'November 2011 – July 2012',
    tasks: [
      'Continued development of investment application for ASABRI using PHP (CodeIgniter) and MySQL.',
      'Used jQuery and Bootstrap for frontend.'
    ]
  }
]
</script>

<style>
body {
  margin: 0;
}
</style>
