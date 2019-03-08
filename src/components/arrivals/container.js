import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import Arrivals from './component';

const body = (repo, country, response) => `
{
    SELECT (sum(?arrivals) as ?${response}) WHERE {
        SERVICE <${repo}> {
            ?obs a qb:observation .
            ?obs vocab:Year <http://ld.linked-open-statistics.org/data/conceptscheme/Year/2015> .
            ?obs vocab:NutsRegion <http://ld.linked-open-statistics.org/data/conceptscheme/NutsRegion/${country}> .
            ?obs vocab:NACE <http://ld.linked-open-statistics.org/data/conceptscheme/NACE/I551_I553> .
            ?obs vocab:Value ?arrivals
        }
    }
}
`;

const queryBuilder = () => `
PREFIX qb:<http://purl.org/linked-data/cube#>
PREFIX vocab:<http://ld.linked-open-statistics.org/vocab/>

SELECT ?valueIt ?valueFr WHERE {
    ${body(sparqlConfig.SPARQL_ENDPOINT_IT_TOURISM, 'IT', 'valueIt')}
    ${body(sparqlConfig.SPARQL_ENDPOINT_FR_TOURISM, 'FR', 'valueFr')}
}
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'arrivals',
  singleResult: true,
});

export default connector(Arrivals, {
  loading: Spinner,
});
