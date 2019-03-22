import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import TypeOfHousing from './component';

const body = (repo, country, response) => `
{
  SELECT (sum(?arrivals) as ?${response}_I551) WHERE {
      SERVICE <${repo}> {
          ?obs a qb:Observation .
          ?obs vocab:Year <http://ld.linked-open-statistics.org/data/conceptscheme/Year/2017> .
          ?obs vocab:NutsRegion <http://ld.linked-open-statistics.org/data/conceptscheme/NutsRegion/${country}> .
          ?obs vocab:NACE <http://ld.linked-open-statistics.org/data/conceptscheme/NACE/I551> .
          ?obs vocab:Value ?arrivals
      }
  }
}
{
  SELECT (sum(?arrivals) as ?${response}_I552_I553) WHERE {
    SERVICE <${repo}> {
        ?obs a qb:Observation .
        ?obs vocab:Year <http://ld.linked-open-statistics.org/data/conceptscheme/Year/2017> .
        ?obs vocab:NutsRegion <http://ld.linked-open-statistics.org/data/conceptscheme/NutsRegion/${country}> .
        ?obs vocab:NACE <http://ld.linked-open-statistics.org/data/conceptscheme/NACE/I552_I553> .
        ?obs vocab:Value ?arrivals
    }
  }
}
`;

const queryBuilder = () => `
PREFIX qb:<http://purl.org/linked-data/cube#>
PREFIX vocab:<http://ld.linked-open-statistics.org/vocab/>

SELECT ?valueIt_I551 ?valueIt_I552_I553 ?valueFr_I551 ?valueFr_I552_I553 WHERE {
    ${body(sparqlConfig.SPARQL_ENDPOINT_IT_TOURISM, 'IT', 'valueIt')}
    ${body(sparqlConfig.SPARQL_ENDPOINT_FR_TOURISM, 'FR', 'valueFr')}
}
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'arrivals',
  singleResult: true,
});

export default connector(TypeOfHousing, {
  loading: Spinner,
});
