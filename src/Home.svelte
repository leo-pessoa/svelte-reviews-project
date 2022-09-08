<script>
  import Card from "./components/UI/Card.svelte";
  import Button from "./components/UI/Button.svelte";
  import FaEdit from "svelte-icons/fa/FaEdit.svelte";
  import FaTrash from "svelte-icons/fa/FaTrash.svelte";
  import Sidebar from "./components/UI/Sidebar.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import App from "./App.svelte";

  let showSidebar = false;

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    cursos = cursos.filter((item) => item.id != itemId);
  };

  const addCourse = (e) => {
    const newCourse = e.detail;
    cursos = [newCourse, ...cursos];
  };

  let cursos = [
    {
      id: 1,
      name: "React",
      description: "Um curso incrível",
      banner: "",
    },
    {
      id: 2,
      name: "Vueee",
      description: "Um curso decente",
      banner: "",
    },
    {
      id: 3,
      name: "Svelte",
      description: "Um curso incrível",
      banner: "",
    },
  ];
</script>

<h1>SEUS TREINAMENTOS</h1>
<button on:click={() => (showSidebar = !showSidebar)}>Novo Treinamento</button>
{#each cursos as curso (curso.id)}
  <Sidebar bind:show={showSidebar}>
    <h3 slot="title">NOVO TREINAMENTO</h3>
    <FeedbackForm on:curso-emitter={addCourse} />
  </Sidebar>
  <Card>
    <div class="card-content">
      <img
        src="/assets/curso.png"
        style="height: 100%; width: auto; object-fit: contain"
        class="course-banner"
        alt=""
      />

      <div class="cards-info">
        <h2 class="card-title">{curso.name}</h2>
        <p style="card-subtitle">{curso.description}</p>
      </div>
      <div class="buttons-wrapper">
        <Button><FaEdit /></Button>
        <Button><FaTrash /></Button>
        <Button>HABILITADO</Button>
      </div>
    </div>
  </Card>
{/each}

<style lang="scss">
  .card-content {
    display: flex;
    flex-flow: row;

    & > .course-banner {
      border-radius: 15px 0 0 15px;
    }

    & .cards-info > .card-title {
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }

    & > .buttons-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
</style>
