using Microsoft.AspNetCore.Mvc;
using ClientsAPI.Models;
using ClientsAPI.Repository;
using ClientsAPI.Models.Dto;
using Microsoft.AspNetCore.Authorization;

namespace ClientsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    [Authorize]
    public class ClientsController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;
        protected ResponseDto _response;

        public ClientsController(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
            _response = new ResponseDto();
        }

        // GET: api/Clients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            try
            {
                var lista = await _clientRepository.GetClients();
                _response.Result = lista;
                _response.DisplayMessage = "Clients List";
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }
            return Ok(_response);
        }

        // GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            ClientDto client = await _clientRepository.GetClientById(id);

            if (client == null)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Client does not exist";
                return NotFound(_response);
            }
            _response.Result = client;
            _response.DisplayMessage = "Client information";
            return Ok(_response);
        }

        // PUT: api/Clients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(int id, ClientDto clientDto)
        {
            try
            {
                ClientDto model = await _clientRepository.CreateUpdate(clientDto);
                _response.Result = model;
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error updating the register";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        // POST: api/Clients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(ClientDto clientDto)
        {
            try
            {
                ClientDto model = await _clientRepository.CreateUpdate(clientDto);
                _response.Result = model;
                return CreatedAtAction("GetClient", new { id = model.Id }, _response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error recording the register";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        // DELETE: api/Clients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            try
            {
                bool isDeleted = await _clientRepository.DeleteClient(id);
                if (isDeleted)
                {
                    _response.Result = isDeleted;
                    _response.DisplayMessage = "Client was deleted successfuly";
                    return Ok(_response);
                }
                else
                {
                    _response.IsSuccess = false;
                    _response.DisplayMessage = "Error deleting the client";
                    return BadRequest(_response);
                }
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        private bool ClientExists(int id)
        {
            return false;
        }
    }
}
