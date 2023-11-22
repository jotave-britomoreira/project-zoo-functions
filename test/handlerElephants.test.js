const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se retorna 4 quando se passa o parâmetro "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Testa se retorna um array com a relação dos nomes de todos os elefantes quando se passa o parâmetro "names"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Testa se retorna número próximo a 10.5 ao passar o parâmetro "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Testa se retorna retorna NW quando se passa o parâmetro "location"', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Testa se retorna 5 quando se passa o parâmetro "popularity"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Testa se retorna um array de dias da semana que não contém `Monday` quando se passa o parâmetro "availability"', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Testa se retorna undefined ao não passar nenhum parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Testa se retorna "Parâmetro inválido, é necessário uma string" quando não se passa um parâmetro do tipo string', () => {
    expect(handlerElephants(69)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Testa se retorna null se não for passado nenhum parâmetro válido', () => {
    expect(handlerElephants('Din Grogu')).toBe(null);
  });
});
