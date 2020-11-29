<template>
  <div class="profile">
    <div class="row">
      <div class="col-md-4 left-col profile--left-side">
        <div class="profile--info mb-4">
          <img src="@/assets/images/profile.jpg" class="rounded float-left w-100" alt="profile" />
          <h5>Jiraphun Jitrukrob</h5>
          <label>Full stack developer</label>
        </div>
        <div class="contact">
          Contacts
          <hr />
          <div class="mb-2">
            <fa :icon="['fas', 'phone']" />
            <label class="pl-2">085-364-4094</label>
          </div>
          <div class="mb-2">
            <fa :icon="['fab', 'github']" />
            <label class="pl-2">
              <a href="https://github.com/Bankbetch" target="_blank">https://github.com/Bankbetch</a>
            </label>
          </div>
          <div class="mb-4">
            <fa :icon="['fas', 'envelope']" />
            <label class="pl-2">
              <a href="mailto: jiraphun.jrb@gmail.com" target="_blank">jiraphun.jrb@gmail.com</a>
            </label>
          </div>
          Skills
          <hr />
          <div>
            <div class="row">
              <div class="col-12 pb-2" v-for="(item, index) of skills" :key="index">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 mt-2">
        <div class="profile--right-side">
          <h5 class="font-weight-bold"><fa :icon="['fas', 'user-alt']" /> About me</h5>
          <hr />
          <p>
            I am a fresh graduate. And have enthusiasm for showing knowledge to develop myself to the potential and non-stop
            learning new things. Finding solutions to challenges and focused on customer satisfaction. Established experience
            developing consumer-focused web sites using multiple tools to meet the needs of customers or suitable projects.
          </p>
          <hr />
          <h5 class="font-weight-bold mb-3"><fa :icon="['fas', 'briefcase']"></fa> Work Experiance</h5>
          <div class="mb-2">
            <p class="title-work"><fa :icon="['fas', 'play']"></fa>Com7 Public Company Limited (February 2016 - June 2016)</p>
            <label class="subtitle-work"> Msc</label>
            <div class="subtitle-work"></div>
          </div>
          <div class="mb-2">
            <p class="title-work"><fa :icon="['fas', 'play']"></fa>MADI (November 2019 - April 2020)</p>
            <label class="subtitle-work">Web Developer (Intern)</label>
            <div class="subtitle-work">
              <ul class="ml-2 work-details">
                <li v-for="(item, index) of listMadi" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="mb-2">
            <p class="title-work"><fa :icon="['fas', 'play']"></fa>ClickNext (May 2020 - Present )</p>
            <label class="subtitle-work">Programmer</label>
            <div class="subtitle-work">
              <ul class="ml-2 work-details">
                <li v-for="(item, index) of listClickNext" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
          <hr />
          <h5 class="font-weight-bold mb-3"><fa :icon="['fas', 'book-open']"></fa> Education</h5>
          <div class="mb-2">
            <p class="title-work"><fa :icon="['fas', 'play']"></fa>Burapha University</p>
            <label class="subtitle-work">Bachelor of Science - BS</label>
            <div class="subtitle-work"></div>
          </div>
          <hr />
          <h5 class="font-weight-bold mb-3"><fa :icon="['fas', 'award']"></fa> Certications & Courses</h5>
          <div class="mb-2" v-for="(item, index) of listCertificate" :key="index">
            <p class="title-work"><fa :icon="['fas', 'play']"></fa> {{ item.title }}</p>
            <div class="subtitle-work">
              <ul class="ml-2 work-details">
                <li v-for="(subtitle, index) of item.subtitle" :key="index">{{ subtitle }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        'Node.js',
        'Nuxt.js',
        'Angular',
        'Git',
        'Docker',
        'Javascript',
        'NGINX',
        'Teamwork',
        'Problem-Solving',
        'Ci/CD (Gitlab)',
        'Linux (Basic command)'
      ],
      listMadi: [
        'Designed and updated layouts to meet usability and Performance requirements.',
        'Tested websites and performed troubleshooting prior to Deployment.',
        'Created site layout and user interface using Angular practices',
        'Planned and engineered RESTful web services to manipulate Dynamic datasets.',
        'Produced websites compatible with multiple browsers and Website is responsive',
        'Production planning while using appropriate tools and Analysis for smooth production output.'
      ],
      listClickNext: [
        'Fixed bugs in existing websites and assisted clients in fxing problems in their Website functions from the front-end.',
        'Production and developing web application according to the design.',
        'Planned and design front-end structure.',
        'Planned and design Vuex for connecting to the back-end.',
        'Production website with ISO27001 standard.',
        'Production and developing web application according to the design.',
        'Authentication with JWT.',
        'Manage users with roles and permissions by each page.',
        'Create algorithms for validating the message before sending it to the user.',
        'Developing with Performance in Mind.'
      ],
      listCertificate: [
        {
          title: 'Udemy',
          subtitle: [
            'Nuxt.js - Vue.js on Steroids',
            'Angular & NodeJS - The MEAN Stack Guide [2020 Edition]',
            'Angular - The Complete Guide (2020 Edition)'
          ]
        },
        {
          title: 'Coursera',
          subtitle: ['AWS Fundamentals: Building Serverless Applications', 'Introduction to HTML5']
        },
        {
          title: 'CompTIA',
          subtitle: ['CompTIA Cloud Essentials']
        }
      ]
    }
  }
}
</script>

<style></style>
