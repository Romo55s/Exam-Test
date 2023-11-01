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
          <div class="result">
            <p>{{ result.question }}</p>
            <p>
              Question {{ result.questionIndex + 1 }}:
              {{ result.isCorrect ? "Correct" : "Incorrect" }}
            </p>
            <p>Question: {{ questions[result.questionIndex].text }}</p>
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
import { questions } from "../storage/questions";

export default {
  data() {
    return {
      questions: questions,
      selectedAnswers: [],
      sendButtonText: "Send",
      examResults: [],
      showResults: false,
      currentPage: 0, // Agrega currentPage
      questionsPerPage: 16,
    };
  },
  computed: {
    visibleQuestions() {
      const startIndex = this.currentPage * this.questionsPerPage;
      const endIndex = startIndex + this.questionsPerPage;
      return this.shuffledQuestions.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.shuffledQuestions.length / this.questionsPerPage);
    },
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
