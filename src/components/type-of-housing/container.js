import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import TypeOfHousing from './component';

const body = (year, repo, country, response) => `
{
  SELECT (sum(?arrivals) as ?${response}_I551) WHERE {
      SERVICE <${repo}> {
          ?obs a qb:Observation .
          ?obs dimension:TimePeriod <${year}> .
          ?obs dimension:Indicator <http://ld.linked-open-statistics.org/codelist/Indicator/AR> .
          ?obs dimension:NutsRegion <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> .
          ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I551> .
          ?obs measure:Value ?arrivals
      }
  }
}
{
  SELECT (sum(?arrivals) as ?${response}_I552) WHERE {
    SERVICE <${repo}> {
        ?obs a qb:Observation .
        ?obs dimension:TimePeriod <${year}> .
        ?obs dimension:Indicator <http://ld.linked-open-statistics.org/codelist/Indicator/AR> .
        ?obs dimension:NutsRegion <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> .
        ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I552> .
        ?obs measure:Value ?arrivals
    }
  }
}
{
  SELECT (sum(?arrivals) as ?${response}_I553) WHERE {
    SERVICE <${repo}> {
        ?obs a qb:Observation .
        ?obs dimension:TimePeriod <${year}> .
        ?obs dimension:Indicator <http://ld.linked-open-statistics.org/codelist/Indicator/AR> .
        ?obs dimension:NutsRegion <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> .
        ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I553> .
        ?obs measure:Value ?arrivals
    }
  }
}
`;

const queryBuilder = year => `
PREFIX qb:<http://purl.org/linked-data/cube#>
PREFIX dimension:<http://ld.linked-open-statistics.org/dimension/>
PREFIX measure:<http://ld.linked-open-statistics.org/measure/>

SELECT ?valueIt_I551 ?valueIt_I552 ?valueIt_I553 ?valueFr_I551 ?valueFr_I552 ?valueFr_I553 WHERE {
    ${body(year, sparqlConfig.SPARQL_ENDPOINT_IT_TOURISM, 'IT', 'valueIt')}
    ${body(year, sparqlConfig.SPARQL_ENDPOINT_FR_TOURISM, 'FR', 'valueFr')}
}
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'arrivals',
  singleResult: true,
  params: ['year'],
});

export default connector(TypeOfHousing, {
  loading: Spinner,
});
