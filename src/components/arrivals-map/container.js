import { sparqlConnect } from 'sparql-connect';
import Spinner from 'components/shared/spinner';
import { sparqlConfig } from 'config';
import EssNetCountries from './component';

const body = (repo, country) => `
{
  SELECT ?label ?contours ?myIndicator
  WHERE {
    GRAPH <http://rdf.insee.fr/graphes/geo/nuts/2016/10>
    {
      <http://ld.linked-open-statistics.org/codelist/NutsRegion/${country}> dcterms:hasPart* ?nuts .
      ?nuts a geo:Feature .
      ?nuts xkos:depth "2"^^xsd:int .
      ?nuts rdfs:label ?label .
      ?nuts geo:hasGeometry ?geometry .
      ?geometry geo:asWKT ?contours 
    }
    {
      SELECT (sum(?arrivals) as ?myIndicator) ?nuts
      WHERE {
          SERVICE <${repo}> {
              ?obs a qb:Observation .
              ?obs dimension:TimePeriod <http://ld.linked-open-statistics.org/codelist/TimePeriod/2015> .
              ?obs dimension:NutsRegion ?nuts .
              ?obs dimension:AccomodationType <http://ld.linked-open-statistics.org/codelist/AccomodationType/I551_I553> .
              ?obs measure:Value ?arrivals
          }
      }
      GROUP BY ?nuts
    }
  }
}
`;

const queryBuilder = () => `
PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
PREFIX geo:<http://www.opengis.net/ont/geosparql#>
PREFIX xkos: <http://rdf-vocabulary.ddialliance.org/xkos#>
PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX qb:<http://purl.org/linked-data/cube#>
PREFIX dimension:<http://ld.linked-open-statistics.org/dimension/>
PREFIX measure:<http://ld.linked-open-statistics.org/measure/>

SELECT ?label ?contours ?myIndicator WHERE {
  ${body(sparqlConfig.SPARQL_ENDPOINT_IT_TOURISM, 'IT')}
  UNION
  ${body(sparqlConfig.SPARQL_ENDPOINT_FR_TOURISM, 'FR')}
}
`;

const connector = sparqlConnect(queryBuilder, {
  queryName: 'arrivalsMap',
});

export default connector(EssNetCountries, {
  loading: Spinner,
});
