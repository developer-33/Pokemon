import withMT from "@material-tailwind/html/utils/withMT";

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],  // Watches all files under the src directory for classes
  theme: {
    extend: {
      backgroundImage: {
        'profile-bg': "url('https://storage.cloud.google.com/bucket3315/new44.jpeg')",  // Define your background image here
      }
    }
  },
  plugins: [],
}); 