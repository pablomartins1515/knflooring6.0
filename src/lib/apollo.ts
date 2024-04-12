import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = 'https://api-sa-east-1.hygraph.com/v2/clu8pknwg000008l92anac3hu/master';

const API_ACCESS_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTE0Nzc2MjUsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2x1OHBrbndnMDAwMDA4bDkyYW5hYzNodS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1zYS1lYXN0LTEuaHlncmFwaC5jb20vIiwic3ViIjoiMjA0N2ExZjMtMzhjYy00ODEwLTkxMzMtMGJiNTc1MmMzMGZmIiwianRpIjoiY2w1Y3lqeDF2MGYwODAxdW42dWlyMTJ5eCJ9.i6idZ64WaeKaMnWF_OQ4f5_y5SSfrbqQEnxAZbmBXMXd9Hdn-Ai-nfSn1aXTXRTkeLhjySsIvTYRaT4yvGv_sgeifztFRJGkGSENaQXMd2pm5QZBTWFSiJNb20hfcM9IfKj-Z1w2e-oi-j9UJuKyCuZnzzXkaidnsa1vazkm0q_7Qi2yU46nVqR4FUt9jbyvnLuXC8wMqIdDFdXLdjPTBPkmUBzrdNBy063WVPsDxdUrTSgoaJ-y8dUMyz7gCyTpRiLMrDuQ_4E_xvUE-kgl9HVQHL6xaeUKIkMstN8bjOhhjpg4GqMtZFBoLSGIV0lZRvzjOAIqTskOICF_qoyJKaWRhImRCPkrZgOzATVXunvYnrfD2kDonErRB0X7i_8qTPEYISkeWFazrCd2JX5qxqpj0Y6QiaKuUGN1wsWJjbdXyV7JIaCiV_UqnrdrR3oHkMEIgIey26r402EHveH3_Lx-zyVoLj1AY7_2lvyIjw2L7PMcGjzAXz4yEM3Cwhw9_-VfVtvBJc3I5nc5WPLQ_2AMLmSBv1pyH7VIn5kGp2bbM_W7zti7zVTm4zzrs32S7kM-Ra7GqYCODW8R3C-S-zrYEo1II4enIqkSV0T1tzTpdV11n21eRKV6gMdQVAvBlaM9DGPyt2iZvGCYEVefyoluh_o14S808GOWYOXtUMU'


export const client = new ApolloClient({
  uri: API_URL,
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
