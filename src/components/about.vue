<template>
    <v-container>


        <v-row>
            <v-col data-aos="fade-in">
                <v-hover
                v-slot="{ hover }"
                
                >
                    <v-card
                    :elevation="hover ? 12 : 2"
                    class="mx-auto"
                    
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
                       
                       <p class="caption">I'm Cedric, Student and independent Full Stack Developer in Philippines. I do collaborate with my acquaintances so i could lend them some help.

                        I love building: Websites either a big or a small projects.
                        
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
                        <v-card class="elevation-2">
                            <v-card-title class="caption">
                                {{exp.title}}
                            </v-card-title>
                            <v-card-text>
                                <p class="caption">
                                   {{exp.desc}}
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
        'mdi-database'
    ],
    experience: [
        {
          color: 'cyan',
          author: 'Cedric',
          title: 'Why I Love Programming',
          desc: "Programming has many faces. It is the science of structured thinking. It is the art of eloquent expression. It teaches you to be humble when you look at other peoples' fascinating work. Most of all, it teaches you a lot about yourself."
        },
        {
          color: 'green',
          author: 'Cedric',
          title: 'When I build stuffs!',
          desc: 'First I draw then I think then I rest then I go to toilet! then think again then overthink again then I execute those ideas! lol :D'
        },
        {
          color: 'pink',
          author: 'Cedric',
          title: 'I am creativee!!',
          desc: 'Yes I am verrryyy creativeee dude forsuree! HA HA HA'
        }
      ],
    }),
    methods:{
        typed : function (){

            var options = {
            strings: ['<s>Cedric</s>','<i>Matthew</i>','<b>Verdida</b>'],
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