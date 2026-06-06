import { Loader2, Mail } from "lucide-solid";
import { Story } from "./storyHelpers";
import { Center, HStack, VStack } from "../components/ui/stack";

import {
  Button,
  ButtonLg,
  ButtonDestructive,
  ButtonGhost,
  ButtonLink,
  ButtonOutline,
  ButtonSecondary,
} from "../components/ui/button";

  const handleToggle = () => {
    console.log("Button click!");
  };

export const Buttons = () => {
  return (
    <Story title="buttons" componentFilename="button">
    <HStack class="gap-4" spacing="gap-4" justify="between" >
      <Button   onClick={handleToggle} >Primary</Button>
      <ButtonLg   onClick={handleToggle} >Primary</ButtonLg>
      <ButtonSecondary>Secondary</ButtonSecondary>
      <ButtonGhost>Ghost</ButtonGhost>
      <ButtonDestructive>Destructive</ButtonDestructive>
      <ButtonLink>Link</ButtonLink>
      <ButtonOutline>Outline</ButtonOutline>
      <Button>
        <Mail class="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 class="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </HStack>
    </Story>
  );
};
