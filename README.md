# TailMed 🐾

**TailMed** is a minimalistic app to manage patient records efficiently. Built with simplicity and user experience in mind, it supports multiple languages, real-time notifications, persistent storage via localStorage, and a responsive interface for seamless use across devices.

## 🌟 Features

- 📝 **Patient Management**: Add, edit, and delete patient records with ease.
- 💬 **Localization**: Full support for English and Spanish with a language toggle.
- 🔔 **Interactive Notifications**: Get instant feedback with toast messages.
- 📀 **Persistent Storage**: Your data is automatically saved in the browser via `localStorage`.
- 📱 **Responsive Design**: Optimized for all screen sizes.
- 🌙 **Minimal UI**: Clean and distraction-free interface.

## 💠 Tech Stack

- **React** (with Vite)
- **Tailwind CSS** – utility-first styling
- **Zustand** – for global state management
- **React Hook Form** – form validation and control
- **React Toastify** – notification system
- **Lucide React** – modern icon set
- **UUID** – for unique ID generation
- **date-fns** – date handling and formatting

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── InputError.tsx
│   ├── LangSwitcher.tsx
│   ├── PetDetail.tsx
│   ├── PetForm.tsx
│   └── PetList.tsx
├── data/
│   └── localized-strings.ts  # Translations
├── stores/             # Zustand stores
│   ├── store.ts
│   └── translationStore.ts
├── types/
│   └── index.ts        # TypeScript types
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Diego3128/tailmed.git
   cd tailmed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

## 🌐 Live Preview

👉 [TailMed on Netlify](https://tailmed.netlify.app/)

---

## 📜 License

This project is licensed under the MIT License.

