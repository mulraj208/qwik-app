import {component$, Resource, useResource$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {server$} from "@builder.io/qwik-city";
import {getApiClients} from "~/utils/commerce-api";

const getCategory = server$(async () => {
  try {
    const {shopperSearch} = await getApiClients();

    const searchResult = await shopperSearch.productSearch({
      parameters: {q: 'shirt'},
    });

    console.log(searchResult);
  } catch (e) {
    console.log('@@@@@@', e);
  }
})

export default component$(() => {
  const apiResource = useResource$(async () => {
    return await getCategory();
  });

  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>

      <Resource
          value={apiResource}
          onPending={() => <p>Loading...</p>}
          onResolved={(data) => <div>{JSON.stringify(data)}</div>}
          onRejected={(error) => <p>Error: {error.message}</p>}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
