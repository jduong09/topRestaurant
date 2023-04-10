const createContactPage = function() {
  const divContent = document.getElementById('content');
  const divContact = document.createElement('div');
  const divContactInformation = document.createElement('div');

  const infoOwner = document.createElement('h2');
  infoOwner.innerHTML = 'Name: Deezy';
  
  const infoAddress = document.createElement('span');
  infoAddress.innerHTML = 'Address: 555 Lorem Epsum Rd, Lorem Epsum, CA 55555';

  const infoPhoneNumber = document.createElement('span');
  infoPhoneNumber.innerHTML = 'Phone Number: 555 555 5555';

  divContactInformation.append(infoOwner, infoAddress, infoPhoneNumber);

  divContact.appendChild(divContactInformation);

  divContent.innerHTML = '';
  divContent.append(divContact);
}

export default createContactPage;