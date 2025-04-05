# Fetch API Data App

## Purpose: 
The objective of this project is to build a functional React Component that fetches data from an API and displays a list of items. The developer will also create a reusable list component to follow best practices in component reusability and separation of concerns.

## Requirements:
1. Use React functional component with hooks (useState, useEffect).
2. Ensure the list component is reusable and dynamic.
3. Use semantic HTML (`<ul>`, `<li>`, `<div>`) for accessibility.
4. Handle Edge cases (empty lists, API errors)

## Use Case:
- In this project, the Fetch API is used to retrieve Users data from JSONPlaceholder which is a free public API. The fetched Data is stored in React state using the UseState hook. By including an empty array as a dependency in the useEffect hook, useEffect is used to fetch data only when the component mounts. The useState hook is used to handle loading states and errors gracefully while implementing throw and catch methods.

- A reusable ListComponent that takes in an array of items as props was developed to render each item dynamically inside a list. A custom render function that handles deleting users from the list is used to implement flexibility that allows customization through props.

- The reusable ListComponent is then used inside a parent component named FetchAPIList while passing the fetched data from the API as props.

- The project also implement displaying a "loading" indicator while data is being fetched, and it shows an error message if the API request fails.