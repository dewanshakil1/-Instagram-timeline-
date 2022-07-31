// get element
const addModal = document.getElementById('add-modal');
const msg = document.querySelector('.msg');
const allPostinner = document.querySelector('.all-post');
console.log(allPostinner);
// all post
const all_post = () => {
	let post = readLSData('inPost');
	console.log(post);
	let list = '';
	if (!post) {
		allPostinner.innerHTML = `<div class="card data-not  shadow-lg text-center"><div class="card-body">No post found</div></div>`;
		return false;
	}
	post.map((data) => {
		list += `
        <div class="post-info">
				<div class="row">
					<div class="post-box">
						<div class="col-md-8">
							<div class="card">
								<div class="card-body">
                                <div class="top-img">
                                <img src="${data.aphoto}" alt="" />
                                </div>

									<div class="post-box-top">
										<span>${data.aname}</span>
										<svg
											aria-label="More options"
											class="_ab6-"
											color="#262626"
											fill="#262626"
											height="24"
											role="img"
											viewBox="0 0 24 24"
											width="24"
										>
											<circle cx="12" cy="12" r="1.5"></circle>
											<circle cx="6" cy="12" r="1.5"></circle>
											<circle cx="18" cy="12" r="1.5"></circle>
										</svg>
									</div>
                                    <div class="post-content-aria">
										<span
											>${data.postcontect}</span
										>
									</div>
								</div>
								<img class="my-0" src="${data.pphoto}" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
	});
	allPostinner.innerHTML = list;
};
all_post();
// submit value
addModal.onsubmit = (e) => {
	e.preventDefault();
	const from_data = new FormData(e.target);
	const data = Object.fromEntries(from_data.entries());
	const { aname, aphoto, postcontect } = Object.fromEntries(
		from_data.entries()
	);
	if (!aname || !aphoto || !postcontect) {
		msg.innerHTML = setAlert('All field are required');
	} else {
		msg.innerHTML = setAlert('data is success', 'success');
		createLSData('inPost', data);
		e.target.reset();
		all_post();
	}
};
