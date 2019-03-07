import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import Classifications from './component';

const queryBuilder = () => `
PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

SELECT ?classification ?label WHERE {
	SERVICE <${sparqlConfig.SPARQL_ENDPOINT_INSEE}> {
		?classification skos:prefLabel ?label .
		?classification rdf:type skos:ConceptScheme .
		FILTER(regex(str(?classification),'/codes/'))
		FILTER(lang(?label) = 'fr')
	}
}
ORDER BY ?label
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'classifications',
});

export default connector(Classifications, {
  loading: Spinner,
});
