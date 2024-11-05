// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite/**/*.js'
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         prompt: ["Prompt", "sans-serif"]
//       },
//     },
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// }


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" // เพิ่มการใช้งาน flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // เรียกใช้ flowbite plugin ปกติ
  ],
};
