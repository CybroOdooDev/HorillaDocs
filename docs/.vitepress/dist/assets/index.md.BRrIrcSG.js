import{_ as a,c as e,a2 as n,o as i}from"./chunks/framework.DPuwY6B9.js";const u=JSON.parse('{"title":"Horilla HRMS Developer Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}'),t={name:"index.md"};function l(o,s,p,r,h,c){return i(),e("div",null,s[0]||(s[0]=[n(`<h1 id="horilla-hrms-developer-documentation" tabindex="-1">Horilla HRMS Developer Documentation <a class="header-anchor" href="#horilla-hrms-developer-documentation" aria-label="Permalink to &quot;Horilla HRMS Developer Documentation&quot;">​</a></h1><p>Welcome to the <strong>Horilla HRMS</strong> developer documentation. This guide will help you understand the internals of our open-source HR management system, so you can contribute, customize, or extend it to fit your needs.</p><h2 id="🚀-quick-start" tabindex="-1">🚀 Quick Start <a class="header-anchor" href="#🚀-quick-start" aria-label="Permalink to &quot;🚀 Quick Start&quot;">​</a></h2><ol><li><strong>Clone the Repository:</strong></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/horilla-opensource/horilla.git</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> horilla</span></span></code></pre></div><ol start="2"><li><strong>Install Dependencies:</strong> We recommend using <code>pipenv</code> or <code>venv</code> for Python dependency management.</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div><ol start="3"><li><strong>Set Up the Database:</strong> Make sure PostgreSQL is installed and create a database for Horilla HRMS:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">psql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postgres</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;CREATE DATABASE horilla_main;&quot;</span></span></code></pre></div><ol start="4"><li><strong>Run the Migrations:</strong> Apply the Django migrations to set up your database schema.</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span></code></pre></div><ol start="5"><li><strong>Start the Development Server:</strong> Run the Django development server and access Horilla HRMS at <code>localhost:8000</code>.</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> runserver</span></span></code></pre></div><h2 id="🧩-contributing" tabindex="-1">🧩 Contributing <a class="header-anchor" href="#🧩-contributing" aria-label="Permalink to &quot;🧩 Contributing&quot;">​</a></h2><p>We welcome contributions! Before you begin, make sure to:</p><ul><li>Fork the repository.</li><li>Create a feature branch (<code>git checkout -b feature-branch</code>).</li><li>Submit a Pull Request with your changes.</li></ul><h3 id="conventions" tabindex="-1">Conventions: <a class="header-anchor" href="#conventions" aria-label="Permalink to &quot;Conventions:&quot;">​</a></h3><ul><li><strong>Code Style:</strong> Follow PEP8 guidelines for Python code.</li><li><strong>Commit Messages:</strong> Use clear and concise commit messages (e.g., <code>fix: resolved employee model validation</code>).</li></ul><h2 id="🔧-configuration" tabindex="-1">🔧 Configuration <a class="header-anchor" href="#🔧-configuration" aria-label="Permalink to &quot;🔧 Configuration&quot;">​</a></h2><p>You can configure Horilla HRMS by editing the <code>settings.py</code> file. Some key settings include:</p><ul><li><strong>Database:</strong> Default PostgreSQL settings can be updated in the <code>DATABASES</code> section.</li><li><strong>Email:</strong> Configure SMTP settings for sending out notifications.</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EMAIL_BACKEND</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;django.core.mail.backends.smtp.EmailBackend&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EMAIL_HOST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;smtp.your-email-service.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EMAIL_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 587</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EMAIL_USE_TLS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EMAIL_HOST_USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;your-email@example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EMAIL_HOST_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;your-password&#39;</span></span></code></pre></div><h2 id="📂-project-structure" tabindex="-1">📂 Project Structure <a class="header-anchor" href="#📂-project-structure" aria-label="Permalink to &quot;📂 Project Structure&quot;">​</a></h2><p>Here’s a brief overview of the key files and folders in Horilla HRMS:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>horilla_hrms/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── main/ # Main Django app for core HRMS logic</span></span>
<span class="line"><span>│ ├── models.py # HR models (Employee, Recruitment, etc.)</span></span>
<span class="line"><span>│ ├── views.py # Views for handling requests</span></span>
<span class="line"><span>│ ├── forms.py # Django forms for data input</span></span>
<span class="line"><span>│ └── urls.py # URL **routing** for the app</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── templates/ # HTML templates</span></span>
<span class="line"><span>│ ├── base.html # Base template for the project</span></span>
<span class="line"><span>│ └── recruitment/ # Templates for the recruitment module</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── static/ # Static assets (CSS, JS)</span></span>
<span class="line"><span>│ └── css/</span></span>
<span class="line"><span>│ └── style.css # Main styles for the project</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── manage.py # Django management script</span></span>
<span class="line"><span>└── requirements.txt # Python dependencies</span></span></code></pre></div><h2 id="📜-api-documentation" tabindex="-1">📜 API Documentation <a class="header-anchor" href="#📜-api-documentation" aria-label="Permalink to &quot;📜 API Documentation&quot;">​</a></h2><p>Horilla HRMS comes with a REST API for managing various aspects of HR processes. Below are some key endpoints:</p><h3 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h3><ul><li><strong>Login:</strong> <code>/api/auth/login/</code> Post credentials to authenticate and receive a token.</li></ul><h3 id="employee-management" tabindex="-1">Employee Management <a class="header-anchor" href="#employee-management" aria-label="Permalink to &quot;Employee Management&quot;">​</a></h3><ul><li><p><strong>Get Employees:</strong> <code>/api/employees/</code> Retrieve a list of all employees.</p></li><li><p><strong>Create Employee:</strong> <code>/api/employees/create/</code> Add a new employee to the system.</p></li></ul><h3 id="recruitment" tabindex="-1">Recruitment <a class="header-anchor" href="#recruitment" aria-label="Permalink to &quot;Recruitment&quot;">​</a></h3><ul><li><p><strong>Get Candidates:</strong> <code>/api/recruitment/candidates/</code> Retrieve a list of all candidates in the recruitment pipeline.</p></li><li><p><strong>Update Recruitment Stage:</strong> <code>/api/recruitment/stage/update/</code> Move candidates between recruitment stages.</p></li></ul><h2 id="🎨-customization" tabindex="-1">🎨 Customization <a class="header-anchor" href="#🎨-customization" aria-label="Permalink to &quot;🎨 Customization&quot;">​</a></h2><h3 id="themes-and-ui-changes" tabindex="-1">Themes and UI Changes <a class="header-anchor" href="#themes-and-ui-changes" aria-label="Permalink to &quot;Themes and UI Changes&quot;">​</a></h3><p>To customize the UI, you can modify the templates located in the <code>templates/</code> folder. Any changes to styles can be made in the <code>static/css/style.css</code> file.</p><ul><li><strong>Changing the Logo:</strong> Replace the <code>logo.png</code> in the <code>static/images/</code> folder.</li><li><strong>Custom CSS:</strong> Add your styles to <code>style.css</code> to change the look and feel of the application.</li></ul><h2 id="🛠️-support" tabindex="-1">🛠️ Support <a class="header-anchor" href="#🛠️-support" aria-label="Permalink to &quot;🛠️ Support&quot;">​</a></h2><p>If you run into any issues or need help, feel free to:</p><ul><li><strong>Open an Issue</strong> on <a href="https://github.com/your-repo/issues" target="_blank" rel="noreferrer">GitHub</a>.</li><li><strong>Join our Developer Slack</strong> for live discussions.</li></ul><hr><p>Happy coding! 🎉</p><p><strong>Horilla HRMS</strong> is free and open-source, and we’re always looking for developers to help improve it. Get involved, and let’s build something great together!</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>This file is designed to attract developers, give them a quick way to get started, and offer clear guidelines on</span></span>
<span class="line"><span>contributing and extending the project. You can adjust the GitHub links and specific configuration options as needed for</span></span>
<span class="line"><span>your actual repository and setup.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>      alert()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,45)]))}const g=a(t,[["render",l]]);export{u as __pageData,g as default};
