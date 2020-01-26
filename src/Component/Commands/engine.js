import About, { aliases as AboutAlias } from "@Component/Commands/about";
import Blog, { aliases as BlogtAlias } from "@Component/Commands/blog";
import Contact, { aliases as ContactAlias } from "@Component/Commands/contact";
import Help, { aliases as HelpAlias } from "@Component/Commands/help";
import Showcase, { aliases as ShowcaseAlias } from "@Component/Commands/showcase";
import { Suicchi } from "suicchi";

export function engine(argv) {
  const suicchi = new Suicchi(null);
  const status = {
    success: "#8dd39e",
    error: "#d7566a"
  };

  suicchi.addCase(AboutAlias, About);
  suicchi.addCase(BlogtAlias, Blog);
  suicchi.addCase(ContactAlias, Contact);
  suicchi.addCase(HelpAlias, Help);
  suicchi.addCase(ShowcaseAlias, Showcase);

  const output = suicchi.evaluate(argv[0]);

  if (!output) {
    return {
      initial: false,
      status: status.error,
      output: `No command found: ${argv[0]}`,
      command: argv[0]
    };
  }

  return {
    initial: false,
    status: status.success,
    output: output(argv.slice(0, 1)),
    command: argv[0]
  };
}
