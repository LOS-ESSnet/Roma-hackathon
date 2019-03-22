import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import Select from './component';

const queryBuilder = () => `
PREFIX skos:<http://www.w3.org/2004/02/skos/core#>
PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>

SELECT ?value ?label WHERE {
  <http://ld.linked-open-statistics.org/codelist/TimePeriod> skos:member ?value .
  ?value rdfs:label ?label
}
ORDER BY ?label
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'timePeriods',
});

export default connector(Select, {
  loading: Spinner,
});
