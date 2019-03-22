import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import Arrivals from './component';

const body = (repo, country, response) => `
{
    SELECT (sum(?arrivals) as ?${response}) WHERE {
        SERVICE <${repo}> {
            ?obs a qb:Observation .
            ?obs dimension:TimePeriod <http://ld.linked-open-statistics.org/codelist/TimePeriod/2015> .
            ?obs dimension:NutsRegion <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> .
            ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I551_I553> .
            ?obs measure:Value ?arrivals
        }
    }
}
`;

const queryBuilder = () => `
PREFIX qb:<http://purl.org/linked-data/cube#>
PREFIX dimension:<http://ld.linked-open-statistics.org/dimension/>
PREFIX measure:<http://ld.linked-open-statistics.org/measure/>

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
