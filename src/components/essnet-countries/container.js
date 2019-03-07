import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import EssNetCountries from './component';

const queryBuilder = () => `
PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
PREFIX geo:<http://www.opengis.net/ont/geosparql#>
PREFIX skos:<http://www.w3.org/2004/02/skos/core#>

SELECT ?label ?contours WHERE {
  ?nuts a geo:Feature .
  ?nuts rdfs:label ?label .
  ?nuts geo:hasGeometry ?geometry .
  ?geometry geo:asWKT ?contours
  FILTER(REGEX(STR(?nuts), "nuts/it|nuts/fr|nuts/bg|nuts/ie"))
}
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'essNetCountries',
});

export default connector(EssNetCountries, {
  loading: Spinner,
});
