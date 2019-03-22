import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import TypeOfHousing from './component';

const body = (repo, country, response) => `
{
  SELECT (sum(?arrivals) as ?${response}_I551) WHERE {
      SERVICE <${repo}> {
          ?obs a qb:Observation .
          ?obs dimension:TimePeriod <http://ld.linked-open-statistics.org/codelist/TimePeriod/2017> .
          ?obs dimension:NutsRegion <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> .
          ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I551> .
          ?obs measure:Value ?arrivals
      }
  }
}
{
  SELECT (sum(?arrivals) as ?${response}_I552_I553) WHERE {
    SERVICE <${repo}> {
        ?obs a qb:Observation .
        ?obs dimension:TimePeriod <http://ld.linked-open-statistics.org/codelist/TimePeriod/2017> .
        ?obs dimension:NutsRegion <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> .
        ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I552_I553> .
        ?obs measure:Value ?arrivals
    }
  }
}
`;

const queryBuilder = () => `
PREFIX qb:<http://purl.org/linked-data/cube#>
PREFIX dimension:<http://ld.linked-open-statistics.org/dimension/>
PREFIX measure:<http://ld.linked-open-statistics.org/measure/>

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
