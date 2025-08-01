import { component$, useId } from "@builder.io/qwik";
import AccordionExample from "~/components/sink/accordion-example";
import AlertExample from "~/components/sink/alert-example";
import AvatarExample from "~/components/sink/avatar-example";
import BreadcrumbExample from "~/components/sink/breadcrumb-example";
import ButtonExample from "~/components/sink/button-example";
import CardExample from "~/components/sink/card-example";
import CheckboxExample from "~/components/sink/checkbox-example";
import CollapsibleExample from "~/components/sink/collapsible-example";
import DropdownExample from "~/components/sink/dropdown-example";
import InputExample from "~/components/sink/input-example";
import LabelExample from "~/components/sink/label-example";
import ModalExample from "~/components/sink/modal-example";
import PopoverExample from "~/components/sink/popover-example";
import SelectExample from "~/components/sink/select-example";
import SeparatorExample from "~/components/sink/separator-example";
import TabsExample from "~/components/sink/tabs-example";
import ToggleExample from "~/components/sink/toggle-example";
import ToggleGroupExample from "~/components/sink/toggle-group-example";

export default component$(() => {
  const id = useId();

  return (
    <>
      <AccordionExample key={id} />,
      <br key={id} />,
      <AlertExample key={id} />,
      <br key={id} />,
      <AvatarExample key={id} />,
      <br key={id} />,
      <BreadcrumbExample key={id} />,
      <br key={id} />,
      <ButtonExample key={id} />,
      <br key={id} />,
      <ButtonExample key={id} />,
      <br key={id} />,
      <ButtonExample key={id} />,
      <br key={id} />,
      <CardExample key={id} />,
      <br key={id} />,
      <CardExample key={id} />,
      <br key={id} />,
      <CheckboxExample key={id} />,
      <br key={id} />,
      <CollapsibleExample key={id} />,
      <br key={id} />,
      <DropdownExample key={id} />,
      <br key={id} />,
      <InputExample key={id} />,
      <br key={id} />,
      <InputExample key={id} />,
      <br key={id} />,
      <LabelExample key={id} />,
      <br key={id} />,
      <ModalExample key={id} />,
      <br key={id} />,
      <PopoverExample key={id} />,
      <br key={id} />,
      <SelectExample key={id} />,
      <br key={id} />,
      <SeparatorExample key={id} />,
      <br key={id} />,
      <SeparatorExample key={id} />,
      <br key={id} />,
      <TabsExample key={id} />,
      <br key={id} />,
      <ToggleExample key={id} />,
      <br key={id} />,
      <ToggleGroupExample key={id} />,
      <br key={id} />,
    </>
  );
});
