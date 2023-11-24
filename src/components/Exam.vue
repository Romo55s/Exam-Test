<template>
  <div class="container">
    <h1 class="mt-5 text-center">Online Exam</h1>
    <div class="row justify-content-center">
      <div
        v-for="(question, index) in visibleQuestions"
        :key="index"
        class="col-md-6 col-sm-12"
      >
        <div class="card mt-4">
          <div class="card-body">
            <p class="card-text">
              <strong>{{ question.id }}:</strong> {{ question.text }}
            </p>
            <select v-model="selectedAnswers[question.id]" class="form-select">
              <option
                v-for="(answer, ansIndex) in question.answers"
                :key="ansIndex"
                :value="answer.text"
              >
                {{ answer.text }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 d-flex justify-content-between">
      <button
        @click="previousPage"
        class="btn btn-secondary"
        :disabled="currentPage === 0"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        class="btn btn-secondary"
        :disabled="currentPage === pageCount - 1"
      >
        Next
      </button>
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
          class="col-md-6 col-sm-12"
        >
          <div
            :class="{
              result: true,
              'correct-result': result.isCorrect,
              'incorrect-result': !result.isCorrect,
            }"
          >
            <p>
              <strong>{{ result.question.text }}</strong>
            </p>
            <p>
              Question {{ result.questionIndex + 1 }}:
              <span
                :class="{
                  'correct-text': result.isCorrect,
                  'incorrect-text': !result.isCorrect,
                }"
              >
                {{ result.isCorrect ? "Correct" : "Incorrect" }}
              </span>
            </p>
            <p>
              <strong>Your Answer: </strong>
              {{ result.selectedAnswer }}
            </p>
            <p>
              <strong>Correct Answer: </strong>{{ result.correctAnswer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questions } from "../storage/questions";

function shuffleArray(array) {
  // Algoritmo de Fisher-Yates para mezclar un array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default {
  data() {
    // Clonar el array de preguntas para no modificar el original
    const shuffledQuestions = [...questions];

    // Mezclar el array de preguntas
    shuffleArray(shuffledQuestions);

    // Agregar IDs automáticamente a las preguntas
    shuffledQuestions.forEach((question, index) => {
      question.id = index + 1;

      // Mezclar las respuestas para cada pregunta
      shuffleArray(question.answers);
    });

    const initialSelectedAnswers = {};
    shuffledQuestions.forEach((question) => {
      initialSelectedAnswers[question.id] = null;
    });

    return {
      questions: shuffledQuestions,
      selectedAnswers: initialSelectedAnswers,
      sendButtonText: "Send",
      examResults: [],
      showResults: false,
      currentPage: 0,
      questionsPerPage: 6,
    };
  },
  computed: {
    visibleQuestions() {
      const startIndex = this.currentPage * this.questionsPerPage;
      const endIndex = startIndex + this.questionsPerPage;
      return this.questions.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.questions.length / this.questionsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount - 1) {
        this.currentPage++;
      }
    },
    submitExam() {
      let score = 0;
      const examResults = [];

      for (let i = 0; i < this.questions.length; i++) {
        const question = this.questions[i];
        const selectedAnswer = this.selectedAnswers[question.id];
        const correctAnswer = question.answers.find(
          (answer) => answer.correct
        ).text;
        const isCorrect = selectedAnswer === correctAnswer;

        examResults.push({
          questionIndex: i,
          question,
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
      alert(`Score: ${score}/${this.questions.length}`);
      console.log(questions);
      console.log(examResults);
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

.correct-result {
  background-color: #c8e6c9; /* Color verde para respuestas correctas */
}

.incorrect-result {
  background-color: #ffcdd2; /* Color rojo para respuestas incorrectas */
}

.correct-text {
  color: green; /* Color de texto verde para respuestas correctas */
}

.incorrect-text {
  color: red; /* Color de texto rojo para respuestas incorrectas */
}

.your-answer-text {
  color: red; /* Color de texto rojo para respuestas incorrectas */
}

.correct-answer-text {
  color: green; /* Color de texto verde para respuestas correctas */
}
</style>
