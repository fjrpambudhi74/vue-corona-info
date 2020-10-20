<template>
  <v-container class="Info mt-5">
    <!-- Landing -->
    <v-row class="my-5">
      <v-col cols="12" md="6">
        <h1 class="info-title">nCov-2019</h1>
        <p class="info-desc">
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus. Typically affects respiratory tract of
          mammals, including humans. Associated with common cold, pneumonia and
          severe acute respiratory syndrome.
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <img src="@/assets/Images/Svg/covid.svg" width="75%" />
      </v-col>
    </v-row>
    <!-- End Landing -->
    <!-- Overview -->
    <v-row class="my-5 overview">
      <v-col cols="12" md="6">
        <img src="@/assets/Images/Svg/2019-nCov1-01.svg" class="img-overview" />
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="info-subtitle">Overview</h1>
        <v-list-item v-for="(item, index) in itemOverview" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <!-- End Overview -->

    <!-- Spreads -->
    <v-row class="my-5 spreads">
      <v-col cols="12" md="6">
        <h1 class="info-subtitle">How It Spreads</h1>
        <v-list-item v-for="(item, index) in itemSpreads" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" md="6">
        <v-row class="img-spread">
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder_handshake_avoid_contact_5964542.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder_22-Cough_5929222.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder_mobile_call_phone_5964548.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder___avoid_public_crowd_5925235.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- End Spreads -->

    <!-- Symptoms -->
    <v-row class="my-5 symptoms">
      <v-col cols="12" md="6">
        <v-row>
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder___cough_coughing_symptom_5925233.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder___fever_high_temperature_5925230.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder___tiredness_tired_fatigue_5925227.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder___shortness_breathe_problem_5925232.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="info-subtitle">Symptoms</h1>
        <v-list-item v-for="(item, index) in itemSymptoms" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
        <p class="content-overview ml-4 mt-3">3. Other symptoms includes :</p>
        <v-list-item v-for="(item, index) in itemOtherSymptoms" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <!-- End Symptoms -->

    <!-- Preventions -->
    <v-row class="my-5 preventions">
      <v-col cols="12" md="6">
        <h1 class="info-subtitle">Preventions</h1>
        <h2 class="ml-4 mt-5">
          You can protect yourself and help prevent spreading the virus to
          others if you:
        </h2>
        <h2 class="text-uppercase ml-4 mt-3">Do</h2>
        <v-list-item v-for="(item, index) in itemPreventionsDo" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
        <h2 class="text-uppercase ml-4 mt-3">Don't</h2>
        <v-list-item v-for="(item, index) in itemPreventionsDont" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" md="6">
        <v-row class="img-spread">
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder_facial_mask_coronavirus_5964544.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder_wash_hands_regulary_5964550.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder_keep_distance_social_5964547.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder_avoid_touch_eyes_mouth_face_5964543.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- Preventions -->

    <!-- Infected -->
    <v-row class="my-5 infected">
      <v-col cols="12" md="6">
        <img src="@/assets/Images/Svg/infected.svg" class="img-infected" />
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="info-subtitle">Feeling Infected</h1>
        <v-list-item v-for="(item, index) in itemInfected" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <!-- End Infected -->

    <!-- Treatments -->
    <v-row class="my-5 preventions">
      <v-col cols="12" md="6">
        <h1 class="info-subtitle">Treatments</h1>
        <v-list-item v-for="(item, index) in itemTreatments" :key="index">
          <v-list-item-content class="content-overview">
            {{ index + 1 }}. {{ item.content }}
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" md="6">
        <v-row class="img-spread">
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder_coronovirus_embulance_medical_care_5932587.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder_coronovirus_medical_authority_health_5932588.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <img
              src="@/assets/Images/Png/iconfinder_coronovirus_home_quarantine_stay_5932590.png"
              class="img-spreads"
            />
          </v-col>
          <v-col md-6>
            <img
              src="@/assets/Images/Png/iconfinder_stay_home_coronovirus_5964549.png"
              class="img-spreads"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- End Treatments -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemOverview: [
        {
          content:
            "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus first detected in Wuhan, China.",
        },
        {
          content:
            "Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.",
        },
        {
          content:
            "Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness",
        },
        {
          content:
            "The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.",
        },
        {
          content:
            "The name coronavirus is derived from the Latin corona, meaning 'crown' or 'halo', which refers to the characteristic appearance reminiscent of a crown.",
        },
      ],
      itemSpreads: [
        {
          content:
            "The main route of transmission is respiratory droplets and close contact.",
        },
        {
          content:
            "When you sneeze or cough, you send out droplets of fluid from your nose and mouth.",
        },
        {
          content:
            "Those droplets can carry infections, and when they enter someone else's enter the eyes, nose or mouth, the infection can make them sick. This is the way the flu and many viruses are spread.",
        },
        {
          content:
            "Most often, you need to be close to the person (within 6 feet) for it to spread this way.",
        },
        {
          content:
            "There is the possibility of aerosol transmission when exposed to high concentration aerosol for a long time in a relatively closed environment.",
        },
        {
          content:
            "The WHO has stated that the risk of spread from someone without symptoms is 'very low' and that fecal transmission is 'low'.",
        },
      ],
      itemSymptoms: [
        {
          content:
            "People may be sick with the virus for 1 to 14 days before developing symptoms.",
        },
        {
          content:
            "The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough.",
        },
      ],
      itemOtherSymptoms: [
        { content: "Shortness of breath" },
        { content: "Sore throat" },
        {
          content:
            "Very few people will report diarrhoea, nausea or a runny nose.",
        },
      ],
      itemPreventionsDo: [
        {
          content:
            "Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub",
        },
        {
          content:
            "Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze",
        },
        {
          content:
            "Avoid close contact (1 meter or 3 feet) with people who are unwell",
        },
        {
          content:
            "Stay home and self-isolate from others in the household if you feel unwell",
        },
      ],
      itemPreventionsDont: [
        {
          content:
            "Touch your eyes, nose, or mouth if your hands are not clean",
        },
      ],
      itemInfected: [
        {
          content:
            "Self-isolation at home has been recommended for those diagnosed with COVID-19 and those who suspect they have been infected.",
        },
        {
          content:
            "Public health agencies have issued self-isolation instructions that include notification of healthcare providers by phone and restricting all activities outside of the home, except for getting medical care.",
        },
        {
          content:
            "Do not go to work, school, or public areas. Avoid using public transportation, ride-sharing, or taxis.",
        },
        {
          content:
            "Those who have recently travelled to a country with widespread transmission or who have been in direct contact with someone diagnosed with COVID-19 have also been asked by some government health agencies to self-quarantine or practise social distancing for 14 days from the time of last possible exposure.",
        },
        {
          content:
            "Attempts to relieve the symptoms may include taking regular (over-the-counter) cold medications, drinking fluids, and resting. Depending on the severity, oxygen therapy, intravenous fluids, and breathing support may be required.",
        },
        { content: "The use of steroids may worsen outcomes." },
      ],
      itemTreatments: [
        {
          content:
            "There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to help them breathe.",
        },
        {
          content:
            "Several organisations around the world are developing vaccines, using several different methods.",
        },
        {
          content:
            "By early March 2020, 30 vaccine candidates were in development, with products by Gilead Sciences and Ascletis Pharma in Phase III clinical trials.",
        },
        {
          content:
            "Several compounds, which were previously approved for treatment of other viral diseases, such as favipiravir, ribavirin, remdesivir and galidesivir, are being investigated against the coronavirus.",
        },
        {
          content:
            "Clinical trials are underway in for lopinavir/ritonavir and of remdesivir.",
        },
        {
          content:
            "Bruce Aylward, an assistant director-general of the WHO, has stated 'there is only one drug right now that we think may have real efficacy and that's remdesivir.'",
        },
      ],
    };
  },
  methods: {
    doMath() {
      return index + 1;
    },
  },
};
</script>

<style scoped>
.info-title {
  font-size: 86px !important;
  font-weight: 600;
  text-align: left;
}

.info-subtitle {
  font-size: 46px !important;
  font-weight: 600;
  text-align: left;
  margin-left: 15px;
}

.info-desc {
  text-align: left;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.7em;
}

.overview {
  text-align: left !important;
}

.content-overview {
  font-size: 18px;
  color: #8bc5ff;
}

.img-overview {
  width: 150%;
  margin-left: -100px;
  margin-top: 100px;
}

.spreads {
  text-align: left !important;
  margin-top: 100px !important;
}

.img-spread {
  margin-top: 70px;
}

.img-spreads {
  box-sizing: border-box;
  /* height: 100%; */
  width: 90%;
  border-radius: 15px;
  border: 4px solid #8bc5ff;
  padding: 25px 25px;
  color: #84ffff;
}

.symptoms {
  text-align: left !important;
  margin-top: 100px !important;
}

.preventions {
  text-align: left !important;
  margin-top: 100px !important;
}

.infected {
  text-align: left !important;
  margin-top: 100px !important;
}

.img-infected {
  width: 80%;
  margin-left: 50px;
  margin: 50px;
}
</style>