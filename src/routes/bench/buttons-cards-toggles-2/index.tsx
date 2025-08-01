import { component$, useId } from "@builder.io/qwik";
import ButtonExample from "~/components/sink/button-example";
import CardExample from "~/components/sink/card-example";
import ToggleExample from "~/components/sink/toggle-example";

export default component$(() => {
  const id = useId();
  const components = [
    <ButtonExample key={id} />,
    <br key={id} />,
    <CardExample key={id} />,
    <br key={id} />,
    <ToggleExample key={id} />,
    <br key={id} />,
  ];
  return (
    <>
      {components}
      {components}
    </>
  );
});
