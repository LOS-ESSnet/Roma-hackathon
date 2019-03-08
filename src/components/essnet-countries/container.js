import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import EssNetCountries from './component';

const queryBuilder = () => `
PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
PREFIX geo:<http://www.opengis.net/ont/geosparql#>
PREFIX xkos: <http://rdf-vocabulary.ddialliance.org/xkos#>
PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT ?label ?contours ?id WHERE {
  ?country dcterms:hasPart* ?nuts .
  ?nuts a geo:Feature .
  ?nuts dc:identifier ?id .
  ?nuts xkos:depth "3"^^xsd:int .
  ?nuts rdfs:label ?label .
  ?nuts geo:hasGeometry ?geometry .
  ?geometry geo:asWKT ?contours
  VALUES ?country {<http://ec.europa.eu/nuts/fr> <http://ec.europa.eu/nuts/it>
    <http://ec.europa.eu/nuts/bg> <http://ec.europa.eu/nuts/ie>}
}
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'essNetCountries',
});

export default connector(EssNetCountries, {
  loading: Spinner,
});
