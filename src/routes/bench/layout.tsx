import { component$ } from '@builder.io/qwik';
import { Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Bench</h1>
      <Slot />
    </>
  );
});
