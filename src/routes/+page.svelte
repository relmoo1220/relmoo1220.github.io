<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { Progress } from "$lib/components/ui/progress/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import Autoplay from "embla-carousel-autoplay";
  import { Button } from "$lib/components/ui/button";
  import { onMount } from "svelte";

  let api: CarouselAPI;
  let current = 0;
  let count = 0;

  $: if (api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;

    api.on("select", () => {
      current = api.selectedScrollSnap() + 1;
    });
  }

  let value = 0;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    value = (scrollTop / windowHeight) * 100;
  };

  onMount(() => {
    window.addEventListener("scroll", updateScrollProgress);

    // Cleanup event listener on component destroy
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  });
</script>

<div class="flex flex-col w-full h-full bg-primary text-secondary pb-24">
  <Progress
    {value}
    max={100}
    class="fixed top-0 left-0 w-full bg-secondary h-2 rounded-none"
  />
  <div class="mt-24 mobile:ml-8 md:ml-64 flex mobile:flex-col">
    <Avatar.Root class="w-80 h-80 mr-20 border-4 border-secondary mobile:mb-16">
      <Avatar.Image src="./profile_photo.jpg" alt="profile photo" />
    </Avatar.Root>
    <div class="flex-col">
      <div class="flex font-extrabold mobile:text-4xl md:text-6xl items-center">
        Hello!
        <img class="mobile:mb-8 md:mb-4 ml-4 w-16 h-16" src="./wave.gif" alt="wave gif" />
      </div>

      <div class="mobile:w-4/5 md:w-3/5 mt-8 text-2xl">
        I'm <span class="text-green-500">Ang Zhen Cai</span>, and I'm passionate
        about the latest developments in technology. I'm also a self-proclaimed
        coffee snob, always on the lookout for the perfect cup.
      </div>
      <div class="flex flex-col mobile:w-4/5 md:w-3/5 mt-8 text-lg">
        Feel free to use the links below to reach out to me or check out my
        GitHub to explore some of my personal projects.
        <span class="mt-2"
          ><a
            class="text-green-500 underline"
            href="mailto:angzhencai@gmail.com">Email</a
          >
          |
          <a
            class="text-green-500 underline"
            href="https://www.linkedin.com/in/ang-zhen-cai/"
            target="_blank"
            rel="noopener noreferrer">LinkedIn</a
          >
          |
          <a
            class="text-green-500 underline"
            href="https://github.com/relmoo1220"
            target="_blank"
            rel="noopener noreferrer">GitHub</a
          ></span
        >
      </div>
    </div>
  </div>
  <Separator class="my-24" />
  <div class="flex flex-col mobile:ml-8 md:ml-64">
    <div class="mobile:text-4xl md:text-6xl font-extrabold mb-16">
      About Me 🎓
    </div>
    <div class="text-lg w-4/5">
      I'm a final-year student pursuing a Bachelor of Science with Honours in
      <span class="text-green-500">Computing Science</span>. This three-year
      direct honours degree program is jointly offered by the Singapore
      Institute of Technology (SIT) and the University of Glasgow.
    </div>
    <div class="text-lg w-4/5 mt-4">
      I have expertise in <span class="text-green-500">web development</span>
      and a strong passion for
      <span class="text-green-500"
        >artificial intelligence and machine learning</span
      >. I thrive on tackling complex challenges that enhance my problem-solving
      skills and drive innovation. As a team player, I value effective
      communication and collaboration, believing they lead to successful
      outcomes. Outside of work, I enjoy exploring the intricacies of coffee
      brewing, further reflecting my appreciation for craftsmanship. I am eager
      to contribute my skills and enthusiasm to a dynamic team in the tech
      industry.
    </div>
    <div class="text-lg w-4/5 mt-4">
      As a team player, I value effective communication and collaboration,
      believing they lead to successful outcomes. Outside of work, I enjoy
      exploring the intricacies of coffee brewing, further reflecting my
      appreciation for craftsmanship. I am eager to contribute my skills and
      enthusiasm to a dynamic team in the tech industry.
    </div>
    <div class="text-lg w-4/5 mt-4">
      I am eager to contribute my skills and enthusiasm to a dynamic team in the
      tech industry.
    </div>
  </div>
  <Separator class="my-24" />
  <div class="flex flex-col mobile:ml-8 md:ml-64">
    <div class="mobile:text-4xl md:text-6xl font-extrabold mb-8">Skills 🛠️</div>
    <Carousel.Root
      class="mobile:w-4/5 md:w-3/5"
      bind:api
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <Carousel.Content>
        <Carousel.Item>
          <div class="flex flex-col mb-4">
            <span class="text-2xl font-extrabold text-green-500 mb-4"
              >Languages</span
            >
            <span class="mb-2">+ TypeScript</span>
            <span class="mb-2">+ JavaScript</span>
            <span class="mb-2">+ HTML / CSS</span>
            <span class="mb-2">+ Python</span>
            <span class="mb-2">+ Java</span>
            <span class="mb-2">+ C#</span>
            <span class="mb-2">+ SQL</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="flex flex-col mb-4">
            <span class="text-2xl font-extrabold text-green-500 mb-4"
              >Frameworks</span
            >
            <span class="mb-2">+ SvelteKit</span>
            <span class="mb-2">+ React</span>
            <span class="mb-2">+ NestJS</span>
            <span class="mb-2">+ Express</span>
            <span class="mb-2">+ FastAPI</span>
            <span class="mb-2">+ Flask</span>
            <span class="mb-2">+ Transformers</span>
            <span class="mb-2">+ TensorFlow</span>
            <span class="mb-2">+ PyTorch</span>
            <span class="mb-2">+ ChromaDB</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="flex flex-col mb-4">
            <span class="text-2xl font-extrabold text-green-500 mb-4"
              >Distributed Computing</span
            >
            <span class="mb-2">+ Docker</span>
            <span class="mb-2">+ Kubernetes</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="flex flex-col mb-4">
            <span class="text-2xl font-extrabold text-green-500 mb-4"
              >Tools</span
            >
            <span class="mb-2">+ GitHub</span>
            <span class="mb-2">+ Turborepo</span>
            <span class="mb-2">+ Ollama</span>
            <span class="mb-2">+ HuggingFace</span>
          </div>
        </Carousel.Item>
      </Carousel.Content>
    </Carousel.Root>
    <div class="text-green-500 py-2 text-start">
      Slide {current} of {count}
    </div>
  </div>
  <Separator class="my-24" />
  <div class="flex flex-col mobile:ml-8 md:ml-64">
    <div class="mobile:text-4xl md:text-6xl font-extrabold mb-8">
      Professional Experience 💼
    </div>
    <div class="flex flex-col mb-4">
      <span class="text-2xl font-extrabold text-green-500 mb-4"
        >ST Engineering</span
      >
      <div
        class="flex mobile:flex-col justify-between mobile:w-4/5 md:w-2/5 text-green-700 mb-4"
      >
        <span>Software Engineer Intern</span>
        <span>Sep 2024 — Present</span>
      </div>
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >Developed several Proof of Concepts (PoCs) utilizing SvelteKit and
        NestJS to explore innovative application solutions. Employed Docker for
        efficient containerization and deployment, streamlining the development
        workflow. This included visualizing flight data through data integration
        to create an interactive user interface, along with building a rendering
        application that enhanced my understanding of data visualization
        techniques and user experience design.</span
      >
    </div>
    <div class="flex flex-col mb-4">
      <span class="text-2xl font-extrabold text-green-500 mb-4"
        >Keysight Technologies</span
      >
      <div
        class="flex mobile:flex-col justify-between mobile:w-4/5 md:w-2/5 text-green-700 mb-4"
      >
        <span>Software Engineer Intern</span>
        <span>Sep 2019 — Feb 2020</span>
      </div>
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >Developed a software application using C# WPF, integrating a charting
        library to receive live data through REST API calls. The application
        transformed numerical data into dynamic charts that automatically
        refreshed with each new data set. Gained a deeper understanding of C#,
        proficient use of external libraries, and hands-on experience with the
        Model-View-ViewModel (MVVM) design pattern.</span
      >
    </div>
  </div>
  <Separator class="my-24" />
  <div class="flex flex-col mobile:ml-8 md:ml-64">
    <div class="mobile:text-4xl md:text-6xl font-extrabold mb-8">
      Notable Personal Projects 🚀
    </div>
    <div class="flex flex-col mb-4">
      <span
        class="text-2xl font-extrabold text-green-500 mb-4 underline mobile:w-4/5"
        ><a
          href="https://github.com/relmoo1220/rag-llm-project"
          target="_blank"
          rel="noopener noreferrer">🔗 Simple Finance RAG LLM ChatBot</a
        ></span
      >
      <span class="mobile:w-4/5 md:w-3/5 text-green-700 mb-4"
        >SvelteKit, FastAPI, Transformers, ChromaDB</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >Developed a Retrieval-Augmented Generation (RAG) finance application
        featuring a SvelteKit frontend and a FastAPI backend, with ChromaDB as
        the vector database. This user-friendly chatbot enables seamless
        querying of financial statements for major companies from 2009 to 2022.
      </span>
    </div>
    <div class="flex flex-col mb-4">
      <span
        class="text-2xl font-extrabold text-green-500 mb-4 underline mobile:w-4/5"
        ><a
          href="https://github.com/relmoo1220/llm-project"
          target="_blank"
          rel="noopener noreferrer">🔗 Mental Health Support LLM ChatBot</a
        ></span
      >
      <span class="mobile:w-4/5 md:w-3/5 text-green-700 mb-4"
        >SvelteKit, Flask, Ollama, LangChain, LLM-Guard</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >This project is a mental health chatbot created to offer support and
        guidance through the use of dolphin-phi large language models (LLMs). It
        utilizes a blend of robust libraries and frameworks to ensure a
        responsive, secure, and user-friendly experience.</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >We are utilizing dolphin-phi, an uncensored language model (LLM). The
        rationale for selecting this LLM is to demonstrate the effectiveness of
        LLM-Guard, which ensures the chatbot's output adheres to strict content
        guidelines. By using an uncensored LLM like dolphin-phi, we can test and
        validate the capabilities of LLM-Guard in real-time. This allows us to
        detect and mitigate potentially harmful or inappropriate content,
        ensuring the chatbot remains safe and aligned with ethical standards,
        even when using an unrestricted LLM.</span
      >
    </div>
    <div class="flex flex-col mb-4">
      <span
        class="text-2xl font-extrabold text-green-500 mb-4 underline mobile:w-4/5"
        ><a
          href="https://github.com/relmoo1220/openlayers-flight-tracker"
          target="_blank"
          rel="noopener noreferrer">🔗 OpenLayers Flight Tracker</a
        ></span
      >
      <span class="mobile:w-4/5 md:w-3/5 text-green-700 mb-4"
        >SvelteKit, NestJS, OpenLayers, OpenSky Network API, Docker</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >This project is a containerized web application that displays live
        flight data on a map using OpenLayers for map tiles and the OpenSky
        Network API for real-time flight information. The backend, built with
        NestJS, fetches live flight data from the OpenSky Network API and
        streams it to the frontend using Server-Sent Events (SSE). The frontend,
        built with SvelteKit, visualizes this data on an interactive map.</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >This setup allows users to see live flight information seamlessly
        updated on a map, all while being hosted in a containerized environment
        for easy scaling and management.</span
      >
    </div>
    <div class="flex flex-col mb-4">
      <span
        class="text-2xl font-extrabold text-green-500 mb-4 underline mobile:w-4/5"
        ><a
          href="https://github.com/relmoo1220/sveltekit-nestjs-postgres"
          target="_blank"
          rel="noopener noreferrer">🔗 File Uploader</a
        ></span
      >
      <span class="mobile:w-4/5 md:w-3/5 text-green-700 mb-4"
        >SvelteKit, NestJS, PostgreSQL, Docker</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >This file uploader web application is a comprehensive demonstration of
        full-stack web development, seamlessly integrating both front-end and
        back-end components. The backend is powered by RESTful APIs to ensure
        efficient data handling and integration. The application also showcases
        full CRUD (Create, Read, Update, Delete) functionality, allowing users
        to manage uploaded files, as well as a search feature to quickly find
        specific records.</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >To further demonstrate modern development practices, the application is
        containerized using Docker, enabling easy deployment and distributed
        computing, making it scalable and versatile across various environments.
        This project serves as a clear example of a fully functional,
        containerized web application architecture.</span
      >
    </div>
    <div class="flex flex-col mb-4">
      <span
        class="text-2xl font-extrabold text-green-500 mb-4 underline mobile:w-4/5"
        ><a
          href="https://github.com/relmoo1220/multi-class-image-classifier"
          target="_blank"
          rel="noopener noreferrer">🔗 Brain Tumor MRI Image Classifier</a
        ></span
      >
      <span class="mobile:w-4/5 md:w-3/5 text-green-700 mb-4"
        >TensorFlow, MatPlotLib, NumPy, Python</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >This project employs TensorFlow Keras to develop a Convolutional Neural
        Network (CNN) model aimed at predicting the presence of tumors in brain
        MRI images. By leveraging advanced image processing techniques and deep
        learning algorithms, the model is trained to analyze MRI scans and
        classify them accurately, facilitating early detection and diagnosis of
        potential brain tumors.</span
      >
    </div>
    <div class="flex flex-col mb-4">
      <span
        class="text-2xl font-extrabold text-green-500 mb-4 underline mobile:w-4/5"
        ><a
          href="https://github.com/relmoo1220/rnn-lstm-trading-project"
          target="_blank"
          rel="noopener noreferrer"
          >🔗 Price Movement Prediction with RNN-LSTM</a
        ></span
      >
      <span class="mobile:w-4/5 md:w-3/5 text-green-700 mb-4"
        >TensorFlow, Scikit-Learn, Pandas, Pandas-TA, NumPy, MatPlotLib, Yahoo
        Finance API, Python</span
      >
      <span class="mb-2 mobile:w-4/5 md:w-3/5"
        >This project aims to predict financial asset price movements using
        historical data from Yahoo Finance. Leveraging machine learning
        techniques, we use a Recurrent Neural Network (RNN) with Long Short-Term
        Memory (LSTM) layers built on TensorFlow's Keras API. LSTMs are
        well-suited for time series analysis, making them ideal for predicting
        stock or asset price movements based on past trends. This model
        processes sequential stock data to generate predictions, helping to
        understand future price trends and enhance decision-making for trading
        or investment purposes.</span
      >
    </div>
  </div>
  <Button
    on:click={scrollToTop}
    class="fixed bottom-16 right-8 bg-green-500 text-primary rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
    aria-label="Scroll to top"
  >
    ☝️
  </Button>
  <!-- Footer Section -->
  <div
    class="fixed bottom-0 left-0 w-full bg-gradient-to-r from-green-400 to-green-700 text-center py-4 marquee"
  >
    <span class="text-primary"
      >This is built by me using SvelteKit and shadcn-svelte! 😊</span
    >
  </div>
</div>

<style>
  .marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .marquee span {
    display: inline-block;
    padding-left: 100%; /* Start off the screen */
    animation: marquee 15s linear infinite; /* Adjust timing as needed */
  }

  @keyframes marquee {
    0% {
      transform: translate(0); /* Start position */
    }
    100% {
      transform: translate(-100%); /* End position */
    }
  }
</style>
