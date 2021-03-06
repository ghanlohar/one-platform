export const getHomeTypeBySPA = `
query HomePageQuery {
  apps {
    id
    applicationType
    name
    icon
    isActive
    path
  }
}`;

export const getContactUsTeamDetails = `
query ContactUsQuery{
  group (cn:"one-portal-devel") {
    members {
      cn
      rhatJobTitle
    }
  }
}
`;

function handleError ( response ) {
   if (!response.ok) {
     throw Error(response.statusText);
   }
   return response;
}

export function getData(query) {
  const fetchOptions = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${window.OpAuthHelper?.jwtToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  };
  return fetch( process.env.API_URL, fetchOptions )
    .then( handleError )
    .then( ( res ) => res.json() )
    .catch( ( err ) => { console.error( err ); } );
}

export function deploySPA(formData) {
  const fetchOptions = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${window.OpAuthHelper?.jwtToken}`,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  };
  return fetch(process.env.DEPLOY_URL, fetchOptions)
    .then(handleError)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}
