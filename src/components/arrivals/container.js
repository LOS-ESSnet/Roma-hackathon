import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import Arrivals from './component';

const body = (repo, country, response) => `
{
    SELECT (sum(?arrivals) as ?${response}) ?timePeriodLabel WHERE {
        SERVICE <${repo}> {
            ?obs a qb:Observation .
            ?obs dimension:TimePeriod ?timePeriod .
            ?obs dimension:Indicator <http://ld.linked-open-statistics.org/codelist/Indicator/AR> .
            ?obs dimension:NutsRegion <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> .
            ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I551_I553> .
            ?obs measure:Value ?arrivals .
        }
        <http://ld.linked-open-statistics.org/codelist/TimePeriod> skos:member ?timePeriod .
        ?timePeriod rdfs:label ?timePeriodLabel
        
    }
    GROUP BY ?timePeriodLabel
}
`;

const queryBuilder = () => `
PREFIX qb:<http://purl.org/linked-data/cube#>
PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
PREFIX dimension:<http://ld.linked-open-statistics.org/dimension/>
PREFIX measure:<http://ld.linked-open-statistics.org/measure/>

SELECT ?valueIt ?valueFr ?timePeriodLabel WHERE {
    ${body(sparqlConfig.SPARQL_ENDPOINT_IT_TOURISM, 'IT', 'valueIt')}
    ${body(sparqlConfig.SPARQL_ENDPOINT_FR_TOURISM, 'FR', 'valueFr')}
}
ORDER BY ?timePeriodLabel
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'arrivals',
});

export default connector(Arrivals, {
  loading: Spinner,
});
