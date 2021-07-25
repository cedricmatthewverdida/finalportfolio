<template>
    <v-container>


        <v-row>
            <v-col data-aos="fade-in">
                <v-hover
                v-slot="{ hover }"
                
                >
                    <v-card
                    :elevation="hover ? 12 : 2"
                    class="mx-auto m1"
                    
                    >

                        <v-img
                        :src="`https://i.ibb.co/qrPc63j/IMG-2031.jpg`"
                        :lazy-src="`https://i.ibb.co/qrPc63j/IMG-2031.jpg`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        
                        ></v-img>
                    <v-card-text class="my-4 title">

                        <div class="text-center">
                            <small class="Hello outline"></small>
                        </div>
                       
                       <p class="caption">Hello there! 👋 I'm Cedric, Student and independent Full Stack Developer 👨‍💻 in Philippines. I do collaborate with my acquaintances so i could lend them some help.

                        I love building: Websites either a big or a small projects. 🧑‍🔧 👨‍🔧
                        
                        Driven self-starter and fast learner, seeking career change and Secure a responsible career opportunity to fully utilize my training and skills, while making significant contribution to the success of the company.
                        </p>


                    <div class="text-center">
                        <h3 class="caption">Tech Stack I Used</h3>
                        <v-btn
                            
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4 mt-5"
                            icon
                            >
                            <v-icon size="24px">
                            {{ icon }}
                            </v-icon>
                        </v-btn> 
                    </div>

                    </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col data-aos="fade-in">
                <h1>
                    Education,
                    Achievements
                </h1>
                  <v-timeline>
                        <v-timeline-item
                        v-for="(exp, i) in experience"
                        :key="i"
                        large
                        >
                        <template v-slot:icon>
                            <v-avatar>
                            <img src="https://i.ibb.co/qrPc63j/IMG-2031.jpg">
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <span>{{exp.author}}</span>
                        </template>
                        <v-card color="m2" class="elevation-2">
                            <v-card-title class="caption">
                                {{exp.title}}
                            </v-card-title>
                            <v-card-text>
                                <p class="caption" v-html="exp.desc">
                                   
                                </p>
                                </v-card-text>
                        </v-card>
                        </v-timeline-item>
                    </v-timeline>
            </v-col>

        </v-row>

    </v-container>
</template>

<script>
import AOS from '../../node_modules/aos/dist/aos';
import Typed from 'typed.js';
  export default {
    data: () => ({
    icons: [
        'mdi-bootstrap',
        'mdi-vuejs',
        'mdi-language-php',
        'mdi-laravel',
        'mdi-nodejs',
        'mdi-database',
        'mdi-vuetify',
        'mdi-graphql',
        'mdi-language-python',
        'mdi-language-csharp',
        'mdi-sass'
    ],
    experience: [
        {
          color: 'cyan',
          author: 'Cedric',
          title: '👨‍💻UNDERGRADUATE',
          desc: "🏫Cagayan de Oro College (COC) <br> 💼Bachelor of Information Technology <br> 🎓2020 - 2023"
        },
        {
          color: 'green',
          author: 'Cedric',
          title: '👨‍🎓SENIOR HIGH',
          desc: '🏫Systems Technology Institute (STI) <br> 💼Technical Vocational Livelihood <br> 🎓2017-2019'
        },
        {
          color: 'pink',
          author: 'Cedric',
          title: '👨‍🎤HIGHSCHOOL',
          desc: '🏫CAGAYAN DE ORO CITY NATIONAL HIGHSCHOOL (CITYHIGH) <br> 💼Technical Vocational Livelihood <br> 🎓2013-2018'
        },
        {
          color: 'cyan',
          author: 'Cedric',
          title: 'Champion Mindanao Cluster Level',
          desc: "STI Code Fest Champion Senior High Devision <br> 2017-2019 Coding Festival"
        },
        {
          color: 'green',
          author: 'Cedric',
          title: 'Honorable mention in EXPO',
          desc: '🏫Systems Technology Institute (STI) <br> 📱 Most Voted Mobile App UI Design.<br> 🎓2019-2020'
        }
      ],
    }),
    methods:{
        typed : function (){

            var options = {
            strings: ['CEDRIC','MATTHEW'],
            typeSpeed: 90,
            loop: true
            };

            var typed = new Typed('.Hello', options);

        }
    },
    mounted(){
        AOS.init();
        this.typed();
    }
  }
</script>
