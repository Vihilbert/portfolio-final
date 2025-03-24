const config = {
  information: {
    name: "حسین اکبری ",
    helloText: "سلام",
    welcomeText: "",
    title: "",
    title3: "and coding the future 💻 ✨",
  },
  flipWords: ["Linux & GitHub for DevOps", "Cloud Computing", "Crafting frameworks", "Frontend Web Developer"],
  codeContent: {
    code: `const profile = {
  name: 'Hossein Akbari',
  title: [
  'Frontend Developer' ,
  'Artificial Intelligence and Neuroscience Researcher',
  'UI/UX & Product Designer'
  ],
  skills: [
  'React','Next.js','TypeScript','Node.js'
  'Python','TensorFlow','PyTorch',
  'Git','Docker','Figma','REST APIs'
  ],
  quickLearner: true, 
  problemSolver: true,
  yearsOfExperience: 4,
  hireable: function() {
    return (
      this.problemSolver &&
      this.skills.length > 5 &&
      this.yearsOfExperience >= 3
    );
  }
};`,
  },
};

export default config;
