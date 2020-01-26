
export default function blog(commands) {
  const [, ...params] = commands;

  if (params.length > 2) {
    return {
      initial: false,
      status: "#d7566a",
      output: "Invalid number of parameters supplied for command 'blog'",
      command: "blog"
    };
  }

  const validFlags = [
    "--help",
    "--open-article",
    "--list-articles",
    "--next-page",
    "--previous-page"
  ];

  params.forEach((param) => {
    const found = validFlags.find((element) => element === param);
    console.log(found)
  })

  return {
    initial: false,
    status: "#8dd39e",
    output: "test",
    command: "blog"
  };
}
