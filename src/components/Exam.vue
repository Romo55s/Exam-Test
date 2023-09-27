<template>
  <div class="container">
    <h1 class="mt-5">Online Exam</h1>
    <div class="row justify-content-center">
      <div
        v-for="(question, index) in shuffledQuestions"
        :key="index"
        class="col-md-6"
      >
        <div class="card mt-4">
          <div class="card-body">
            <p class="card-text">{{ question.text }}</p>
            <select v-model="selectedAnswers[index]" class="form-select">
              <option
                v-for="(answer, ansIndex) in question.answers"
                :key="ansIndex"
              >
                {{ answer.text }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <button @click="submitExam" class="btn btn-primary mt-4 mb-4 w-100">
      {{ sendButtonText }}
    </button>
    <div v-if="showResults" class="mt-4">
      <h2>Results:</h2>
      <div class="row">
        <div
          v-for="(result, index) in examResults"
          :key="index"
          class="col-md-6"
        >
          <div class="result">
            <p>
              Question {{ result.questionIndex + 1 }}:
              {{ result.isCorrect ? "Correct" : "Incorrect" }}
            </p>
            <p v-if="!result.isCorrect">
              Your Answer: {{ result.selectedAnswer }}
            </p>
            <p>Correct Answer: {{ result.correctAnswer }}</p>
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
      questions: [
        {
          text: "It is a main motivation for constructing distributed systems.",
          answers: [
            { text: "The sharing of resources", correct: true },
            { text: "Independent failures", correct: false },
            { text: "A distributed systems", correct: false },
            {
              text: "Internet, intranet, and ubiquitous computing",
              correct: false,
            },
            { text: "Concurrency", correct: false },
          ],
        },
        {
          text: "When all computer systems can fail and the responsibility of system designers is to plan for the consequences of it, is called:",
          answers: [
            { text: "The sharing of resources", correct: false },
            { text: "Independent failures", correct: true },
            { text: "A distributed systems", correct: false },
            {
              text: "Internet, intranet, and ubiquitous computing",
              correct: false,
            },
            { text: "Concurrency", correct: false },
          ],
        },
        {
          text: "It is one in which components located at networked computers communicate and coordinate their actions only by passing messages.",
          answers: [
            { text: "The sharing of resources", correct: false },
            { text: "Independent failures", correct: false },
            { text: "A distributed systems", correct: true },
            {
              text: "Internet, intranet, and ubiquitous computing",
              correct: false,
            },
            { text: "Concurrency", correct: false },
          ],
        },
        {
          text: "They are three examples of distributed systems.",
          answers: [
            { text: "The sharing of resources", correct: false },
            { text: "Independent failures", correct: false },
            { text: "A distributed systems", correct: false },
            {
              text: "Internet, intranet, and ubiquitous computing",
              correct: true,
            },
            { text: "Concurrency", correct: false },
          ],
        },
        {
          text: "It is the capacity of the system to handle shared resources can be increased by adding more resources to the network.",
          answers: [
            { text: "The sharing of resources", correct: false },
            { text: "Independent failures", correct: false },
            { text: "A distributed systems", correct: false },
            {
              text: "Internet, intranet, and ubiquitous computing",
              correct: false,
            },
            { text: "Concurrency", correct: true },
          ],
        },
        // Preguntas y respuestas adicionales que proporcionaste
        {
          text: "Its role is to protect an intranet by preventing unauthorized messages leaving or entering.",
          answers: [
            { text: "Firewall", correct: true },
            { text: "Router", correct: false },
            { text: "Switch", correct: false },
            { text: "Hub", correct: false },
          ],
        },
        {
          text: "The portability of many of these devices, together with their ability to connect conveniently to networks in different places, make this type of computing possible.",
          answers: [
            { text: "Mobile computing", correct: true },
            { text: "Cloud computing", correct: false },
            { text: "Edge computing", correct: false },
            { text: "Distributed computing", correct: false },
          ],
        },
        {
          text: "It is the harnessing of many small, cheap computational devices that are present in user physical environments, including the home, office, and elsewhere.",
          answers: [
            { text: "Ubiquitous computing", correct: true },
            { text: "Quantum computing", correct: false },
            { text: "Supercomputing", correct: false },
            { text: "Edge computing", correct: false },
          ],
        },
        {
          text: "It is a portion of the Internet that is separately administered and has a boundary that can be configured to enforce local security policies.",
          answers: [
            { text: "An intranet", correct: true },
            { text: "An extranet", correct: false },
            { text: "The dark web", correct: false },
            { text: "The deep web", correct: false },
          ],
        },
        {
          text: "It is a vast interconnected collection of computer networks of many different types, programs running on the computers connected to it interact by passing messages, employing a common means of communication.",
          answers: [
            { text: "The internet", correct: true },
            { text: "The intranet", correct: false },
            { text: "The extranet", correct: false },
            { text: "The World Wide Web", correct: false },
          ],
        },
        {
          text: "They are three of the challenges in distributed systems that must be meet by designers to be aware of them are:",
          answers: [
            { text: "Heterogeneity, Openness and Scalability.", correct: true },
            { text: "Security, Privacy and Latency.", correct: false },
            {
              text: "Concurrency, Fault Tolerance and Load Balancing.",
              correct: false,
            },
            {
              text: "Availability, Reliability and Consistency.",
              correct: false,
            },
          ],
        },
        {
          text: "The Web is based on three main standard technological components:",
          answers: [
            {
              text: "HTML, URL, and the client-server system architecture.",
              correct: true,
            },
            { text: "HTTP, DNS, and Email.", correct: false },
            { text: "TCP, IP, and FTP.", correct: false },
            { text: "JavaScript, CSS, and AJAX.", correct: false },
          ],
        },
        {
          text: "They are transparencies that must meet the distributed systems.",
          answers: [
            { text: "Location, failure and performance.", correct: true },
            { text: "Security, Privacy and Latency.", correct: false },
            {
              text: "Concurrency, Fault Tolerance and Load Balancing.",
              correct: false,
            },
            {
              text: "Availability, Reliability and Consistency.",
              correct: false,
            },
          ],
        },
        {
          text: "This challenge is defined as the concealment from the user and the application programmer of the separation of components in a distributed system, so that the system is perceived as a whole rather than as a collection of independent components.",
          answers: [
            { text: "Transparency.", correct: true },
            { text: "Security.", correct: false },
            { text: "Concurrency.", correct: false },
            { text: "Scalability.", correct: false },
          ],
        },
        {
          text: "In this challenge both services and applications provide resources that can be shared by clients in a distributed systems.",
          answers: [
            { text: "Concurrency.", correct: true },
            { text: "Fault Tolerance.", correct: false },
            { text: "Latency.", correct: false },
            { text: "Scalability.", correct: false },
          ],
        },
        {
          text: "This is the lowest-layer which bring the system’s programming interface up to a level that facilities communication and coordination between processes.",
          answers: [
            { text: "System Platform", correct: true },
            { text: "Middleware", correct: false },
            { text: "Architectural Model", correct: false },
            { text: "Cache", correct: false },
          ],
        },
        {
          text: "It is concerned with the placement of a distributed system parts and the relationships between them.",
          answers: [
            { text: "The architectural model of DS", correct: true },
            { text: "System Platform", correct: false },
            { text: "Middleware", correct: false },
            { text: "Proxy servers and caches", correct: false },
          ],
        },
        {
          text: "It is a layer of software whose purpose is to mask heterogeneity and provide a convenient programming model to application programmers.",
          answers: [
            { text: "Middleware", correct: true },
            { text: "System Platform", correct: false },
            { text: "The architectural model of DS", correct: false },
            { text: "Proxy servers and caches", correct: false },
          ],
        },
        {
          text: "In this architecture model, a cache is a store of recently used data objects that is closer than the objects themselves.",
          answers: [
            { text: "Proxy servers and caches", correct: true },
            { text: "System Platform", correct: false },
            { text: "Middleware", correct: false },
            { text: "The architectural model of DS", correct: false },
          ],
        },
        {
          text: "This term refers to the structuring of software as layers or modules in a single computer and in terms of services offered and requested between processes located in the same or different computers.",
          answers: [
            { text: "Software architecture design", correct: true },
            { text: "System Platform", correct: false },
            { text: "Middleware", correct: false },
            { text: "The architectural model of DS", correct: false },
          ],
        },
        {
          text: "It is a running program that travels from one computer to another in a network carrying out a task on someone’s behalf, such as collecting information, eventually returning with the results.",
          answers: [
            { text: "A mobile agent", correct: true },
            { text: "A client-server model", correct: false },
            { text: "Spontaneous networking", correct: false },
            { text: "Responsiveness, throughput and balancing computational loads.", correct: false },
            { text: "Peer processes", correct: false },
          ],
        },
        {
          text: "This is the architecture model that is most cited when distributed systems are discussed.",
          answers: [
            { text: "A peer-to-peer model", correct: false },
            { text: "A centralized model", correct: false },
            { text: "Client-Server model", correct: true },
            { text: "A hybrid model", correct: false },
          ],
        },
        {
          text: "It is the form of distribution that integrates mobile devices and other devices into a given network with easy connection, easy integration, limited connectivity, etc.",
          answers: [
            { text: "Centralized distribution", correct: false },
            { text: "Spontaneous networking", correct: true },
            { text: "Peer-to-peer distribution", correct: false },
            { text: "Distributed integration", correct: false },
          ],
        },
        {
          text: "Performance issues arising from the limited processing and communication capacities of computers and networks are considered under the following subheadings:",
          answers: [
            { text: "Responsiveness, throughput and balancing computational loads.", correct: true },
            { text: "Efficiency and resource utilization.", correct: false },
            { text: "Scalability and flexibility.", correct: false },
            { text: "Security and reliability.", correct: false },
          ],
        },
        {
          text: "In this architecture all of the processes play similar roles, interacting cooperatively as peers to perform a distributed activity or computation without any distinction between clients and servers.",
          answers: [
            { text: "Client-Server architecture", correct: false },
            { text: "Peer-to-peer architecture", correct: true },
            { text: "Centralized architecture", correct: false },
            { text: "Hybrid architecture", correct: false },
          ],
        },

        // Nuevas preguntas y respuestas (Segunda sección)
        {
          text: "Dependability issues are a requirement in most application domains. We define the dependability of computer systems as:",
          answers: [
            { text: "Correctness, security and fault tolerance.", correct: true },
            { text: "Reliability, scalability and performance.", correct: false },
            { text: "Privacy, latency and concurrency.", correct: false },
            { text: "Availability, efficiency and throughput.", correct: false },
          ],
        },
        {
          text: "This is performed when, in many cases, we are interested in knowing whether an event (sending or receiving a message) at one process occurred before, after, or concurrently with another event at another process.",
          answers: [
            { text: "Event ordering", correct: true },
            { text: "Event simulation", correct: false },
            { text: "Event synchronization", correct: false },
            { text: "Event broadcasting", correct: false },
          ],
        },
        {
          text: "In this type of Distributed System, the time to execute each step of a process has known lower and upper bounds.",
          answers: [
            { text: "Synchronous Distributed Systems", correct: true },
            { text: "Asynchronous Distributed Systems", correct: false },
            { text: "Parallel Distributed Systems", correct: false },
            { text: "Real-time Distributed Systems", correct: false },
          ],
        },
        {
          text: "Each computer in a distributed system has its own internal clock, which can be used by local processes to obtain the value of the current time. This concept refers to the relative amount that a computer clock differs from a perfect reference clock.",
          answers: [
            { text: "Clock drift rate", correct: true },
            { text: "Clock synchronization", correct: false },
            { text: "Time drift rate", correct: false },
            { text: "Time synchronization", correct: false },
          ],
        },
        {
          text: "In this type of Distributed System, process execution speed is such that each step may take an arbitrarily long time.",
          answers: [
            { text: "Asynchronous Distributed Systems", correct: true },
            { text: "Synchronous Distributed Systems", correct: false },
            { text: "Parallel Distributed Systems", correct: false },
            { text: "Real-time Distributed Systems", correct: false },
          ],
        },

        // ... (preguntas y respuestas anteriores) ...

        // Nuevas preguntas y respuestas (Tercera sección)
        {
          text: "When it does not transport a message from p’s outgoing message buffer to q’s incoming message buffer, which is known as ‘dropping message’, we are talking about:",
          answers: [
            { text: "Communication omission failures", correct: true },
            { text: "Message loss", correct: false },
            { text: "Network congestion", correct: false },
            { text: "Message corruption", correct: false },
          ],
        },
        {
          text: "When we say that a process has crashed, we mean that it has halted and will not execute any further steps of its program ever. This is a type of:",
          answers: [
            { text: "Process omission failure", correct: true },
            { text: "Process termination failure", correct: false },
            { text: "Process suspension failure", correct: false },
            { text: "Process deadlock failure", correct: false },
          ],
        },
        {
          text: "To model security threats, we postulate that this element is capable of sending any message to any process and reading or copying any message between a pair of processes.",
          answers: [
            { text: "The enemy in the security model", correct: true },
            { text: "The hacker in the security model", correct: false },
            { text: "The intruder in the security model", correct: false },
            { text: "The attacker in the security model", correct: false },
          ],
        },
        {
          text: "In this, we talk about the security of a distributed system that can be achieved by securing the processes and the channels used for their interactions and by protecting the objects that they encapsulate against unauthorized access.",
          answers: [
            { text: "The security model", correct: true },
            { text: "The trust model", correct: false },
            { text: "The privacy model", correct: false },
            { text: "The encryption model", correct: false },
          ],
        },
        {
          text: "Encryption, authentication and Identification sometimes are used to build __________ as a service layer on top of existing communication services.",
          answers: [
            { text: "Secure channels", correct: true },
            { text: "Private networks", correct: false },
            { text: "Firewalls", correct: false },
            { text: "Intrusion detection systems", correct: false },
          ],
        },
      ],
      selectedAnswers: [],
      sendButtonText: "Send",
      examResults: [],
      showResults: false,
    };
  },
  computed: {
    shuffledQuestions() {
      // Copia y revuelve tanto las preguntas como las respuestas
      const shuffled = [...this.questions].map((question) => {
        const shuffledAnswers = this.shuffleArray([...question.answers]);
        return {
          text: question.text,
          answers: shuffledAnswers,
        };
      });
      return this.shuffleArray(shuffled);
    },
  },
  methods: {
    shuffleArray(array) {
      // Función para revolver un array
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    submitExam() {
      // Lógica para evaluar el examen
      let score = 0;
      const examResults = [];

      for (let i = 0; i < this.questions.length; i++) {
        const selectedAnswer = this.selectedAnswers[i];
        const correctAnswer = this.shuffledQuestions[i].answers.find(
          (answer) => answer.correct
        ).text;
        const isCorrect = selectedAnswer === correctAnswer;

        examResults.push({
          questionIndex: i,
          selectedAnswer,
          correctAnswer,
          isCorrect,
        });

        if (isCorrect) {
          score++;
        }
      }

      this.examResults = examResults;
      this.showResults = true;
      console.log(this.showResults);
      alert(`Score: ${score}/${this.questions.length}`);
    },
  },
};
</script>

<style>
.result {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
