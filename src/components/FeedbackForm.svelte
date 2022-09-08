<script>
  import { v4 as uuidv4 } from "uuid";
  import Button from "./UI/Button.svelte";
  import schema from "../utils/schemas/schema";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let course = {
    name: "",
    description: "",
    hours: "",
    activation: "",
    deactivation: "",
  };

  let btnDisabled = true;

  let min = 10;
  let message = "";

  let newCourse;

  let errors = {};

  const handleSubmit = async () => {
    try {
      await schema.validate(course, { abortEarly: false });
      alert(JSON.stringify(course, null, 2));
      errors = {};
      console.log(errors, "aaaaaaa");
      const { name, hours, description, activation, deactivation } = course;

      newCourse = {
        id: uuidv4(),
        name,
        hours,
        description,
        activation,
        deactivation,
      };

      dispatch("curso-emitter", newCourse);
    } catch (err) {
      errors = err.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="input-group">
    <label for="name">Nome</label>
    <input
      type="text"
      id="name"
      bind:value={course.name}
      placeholder="Escreva sua mensagem"
    />
    {#if errors.name}
      <span class="error">{errors.name}</span>
    {/if}
    <label for="description">Descrição</label>
    <input
      type="text"
      id="description"
      bind:value={course.description}
      placeholder="Escreva sua mensagem"
    />
    {#if errors.description}
      <span class="error">{errors.description}</span>
    {/if}
    <label for="inputnumber1">Carga Horária</label>
    <input
      id="hours"
      type="text"
      bind:value={course.hours}
      placeholder="Escreva sua mensagem"
    />
    {#if errors.hours}
      <span class="error">{errors.hours}</span>
    {/if}
    <label for="inputnumber1">Ativação do Curso</label>
    <input
      type="text"
      bind:value={course.activation}
      placeholder="Escreva sua mensagem"
    />
    {#if errors.activation}
      <span class="error">{errors.activation}</span>
    {/if}
    <label for="hours">Desativação do Curso</label>
    <input
      type="text"
      bind:value={course.deactivation}
      placeholder="Escreva sua mensagem"
    />
    {#if errors.deactivation}
      <span class="error">{errors.deactivation}</span>
    {/if}
    <div class="send-buttons">
      <Button disabled={btnDisabled} type="submit">Desabilitar</Button>
      <Button disabled={btnDisabled} type="submit">Salvar</Button>
    </div>
  </div>
  {#if message}
    <div class="message">
      {message}
    </div>
  {/if}
</form>

<style lang="scss">
  .input-group {
    display: flex;
    flex-direction: column;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;

    & > label {
      font-size: 14px;
    }

    & > input {
      flex-grow: 3;
      border: none;
      font-size: 16px;
      margin-bottom: 10px;
      height: 40px;
      border-radius: 5px;
      padding: 15px;
      box-shadow: rgba(0, 0, 0, 0.15) 1px 2px 5px;
    }

    & > input:focus {
      outline: none;
    }
  }
</style>
